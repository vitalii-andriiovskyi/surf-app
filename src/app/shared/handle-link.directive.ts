import { Directive, HostListener } from '@angular/core';
import { LocationService } from '../core/services/location.service';

@Directive({
  selector: '[surfHandleLink]'
})
export class HandleLinkDirective {

  dtOn = false;

  constructor(private locationService: LocationService) { }

  @HostListener('click', ['$event.target', '$event.button', '$event.ctrlKey', '$event.metaKey', '$event.altKey'])
  onClick(eventTarget: HTMLElement, button: number, ctrlKey: boolean, metaKey: boolean, altKey: boolean): boolean {

    // Hide the search results if we clicked outside both the "search box" and the "search results"
    // if (!this.searchElements.some(element => element.nativeElement.contains(eventTarget))) {
    //   this.hideSearchResults();
    // }

    // Show developer source view if the footer is clicked while holding the meta and alt keys
    if (eventTarget.tagName === 'FOOTER' && metaKey && altKey) {
      this.dtOn = !this.dtOn;
      return false;
    }

    // Deal with anchor clicks; climb DOM tree until anchor found (or null)
    let target: HTMLElement|null = eventTarget;
    while (target && !(target instanceof HTMLAnchorElement)) {
      target = target.parentElement;
    }
    if (target instanceof HTMLAnchorElement) {
      return this.locationService.handleAnchorClick(target, button, ctrlKey, metaKey);
    }

    // Allow the click to pass through
    return true;
  }



}
