import { Directive, ElementRef, Renderer2, OnInit, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[surfAddContent]'
})
export class AddContentDirective implements OnInit, OnChanges {

  elWrapper: HTMLElement;
  elPrevious: HTMLElement;
  @Input('surfAddContent') content: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.putContent();
  }

  ngOnChanges() {
    this.putContent();
  }

  putContent() {
    this.elPrevious = this.el.nativeElement.querySelector('.innerDivArticle');
    if (this.elPrevious) {
      this.renderer.removeChild(this.el.nativeElement, this.elPrevious);
    }

    this.elWrapper = this.renderer.createElement('div');
    this.renderer.addClass(this.elWrapper, 'innerDivArticle');
    this.elWrapper.innerHTML = this.content;
    this.renderer.appendChild(this.el.nativeElement, this.elWrapper);
  }

}
