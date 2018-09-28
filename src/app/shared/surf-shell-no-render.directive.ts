import { Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Directive({
  selector: '[surfShellNoRender]'
})
export class SurfShellNoRenderDirective implements OnInit {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    @Inject(PLATFORM_ID) private platformId
  ) { }

  ngOnInit() {
    console.log('log');
    if (isPlatformServer(this.platformId)) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
