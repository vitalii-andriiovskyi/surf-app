import {Directive, ElementRef, HostListener, Input, Output, HostBinding, EventEmitter, OnChanges, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResizeService } from '../services/resize.service';
import { WINDOW } from '../services/window-ref.service';

// this directive is helpfull ib=n case when element has 'position: absolute' and parent has 'position: relative'.
// Parent has one direct child and thus its height becomes 0. Element followed parent element stay under parent's child
// It's needed to set height of parent directly. 

// Such approach and directive is needed for right changing of slides in carousel and beautifull apearance of background
@Directive({
  selector: '[surfCurrentHeight]',
  exportAs: 'surfCurrentHeight',
})
export class CurrentHeightDirective implements OnChanges, OnInit, OnDestroy {
  private resizeSubscription: Subscription;
  @Input('surfCurrentHeight') actualElement: boolean = true;
  @Output('surfDefineHeight') passHeight = new EventEmitter();

  currentHeight: number;
  constructor(private el: ElementRef,
              private resizeService: ResizeService,
              @Inject(WINDOW) private winRef: Window) { }

  ngOnInit() {
    this.resizeSubscription = this.resizeService.onResize$
        .subscribe(size => {
          this.getHeight();
          this.passHeight.emit(this.currentHeight);
        });
  }

  ngOnChanges() {
    setTimeout(() => {
      this.getHeight();
      this.passHeight.emit(this.currentHeight);
    }, 0);
  }

  ngOnDestroy() {
    this.resizeSubscription.unsubscribe();
  }
  

  getHeight() {
    if (!this.actualElement) { return 0; }
    this.currentHeight = this.el.nativeElement.offsetHeight;
  }

  @HostListener('click') getSelfHeight() {
    this.getHeight();
    this.passHeight.emit(this.currentHeight);
  }

}
