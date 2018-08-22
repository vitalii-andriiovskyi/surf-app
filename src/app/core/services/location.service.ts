import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { WINDOW } from '../window-ref.service';
import { SwUpdatesService } from '../sw-updates/sw-updates.service';

@Injectable()
export class LocationService {

  private readonly urlParser = document.createElement('a');
  private swUpdateActivated = false;

  constructor(
    private router: Router,
    @Inject(WINDOW) private winRef: Window,
    swUpdates: SwUpdatesService) {

    swUpdates.updateActivated.subscribe(() => this.swUpdateActivated = true);
  }

  handleAnchorClick(anchor: HTMLAnchorElement, button = 0, ctrlKey = false, metaKey = false) {

    // Check for modifier keys and non-left-button, which indicate the user wants to control navigation
    if (button !== 0 || ctrlKey || metaKey) {
      return true;
    }

    // If there is a target and it is not `_self` then we take this
    // as a signal that it doesn't want to be intercepted.
    // TODO: should we also allow an explicit `_self` target to opt-out?
    const anchorTarget = anchor.target;
    if (anchorTarget && anchorTarget !== '_self') {
      return true;
    }

    if (anchor.getAttribute('download') != null) {
      return true; // let the download happen
    }

    const { pathname, search, hash } = anchor;
    const relativeUrl = pathname + search + hash;
    this.urlParser.href = relativeUrl;

    // don't navigate if external link or has extension
    if ( anchor.href !== this.urlParser.href ||
         !/\/[^/.]*$/.test(pathname) ) {
      return true;
    }

    // approved for navigation
    this.go(relativeUrl);
    return false;
  }

  go(url: string|null|undefined) {
    if (!url) { return; }
    url = this.stripSlashes(url);
    if (/^http/.test(url) || this.swUpdateActivated) {
      // Has http protocol so leave the site
      // (or do a "full page navigation" if a ServiceWorker update has been activated)
      this.goExternal(url);
    } else {
      this.router.navigate([url]);
    }
  }

  goExternal(url: string) {
    this.winRef.location.assign(url);
  }

  private stripSlashes(url: string) {
    return url.replace(/^\/+/, '').replace(/\/+(\?|#|$)/, '$1');
  }

}
