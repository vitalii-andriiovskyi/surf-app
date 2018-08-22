import {Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

/**
 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
 */
@Directive({
  selector: '[surfNavbarCollapse]',
  exportAs: 'surfNavbarCollapse',
  // host: {'[class.collapse]': 'true', '[class.show]': '!collapsed'}
})
export class NavbarCollapseDirective {
  /**
   * A flag indicating collapsed (true) or open (false) state.
   */

  @Input('surfNavbarCollapse') collapsed: boolean;
  @Input() surfBreakpoint: number;

  constructor(private el: ElementRef) { }

  @HostBinding('class.collapse') get collapse() { return true; }
  // @HostBinding('class.collapsing') get collapsing() { return true; }
  @HostBinding('class.show') get show() { return this.isWiderBreakpoint(this.el, this.surfBreakpoint); }


  //@HostBinding('class.show') get show() { return this.isWiderBreakpoint(this.el, this.surfBreakpoint); }

  isWiderBreakpoint(el: ElementRef, width: number): boolean {
    // console.log(el.nativeElement.closest( '.navbar' ).offsetWidth);
    if (el.nativeElement.closest( '.navbar' ).offsetWidth <= width ) {
      return !this.collapsed;
    } else {
      return true;
    }
  }
}
