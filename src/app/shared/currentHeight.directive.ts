import {Directive, ElementRef, HostListener, Input, Output, HostBinding, EventEmitter, OnChanges, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResizeService } from '../core/resize.service';
import { WINDOW } from '../core/window-ref.service';


@Directive({
  selector: '[surfCurrentHeight]',
  exportAs: 'surfCurrentHeight',
})
export class CurrentHeightDirective implements OnChanges, OnInit {
  private resizeSubscription: Subscription;
  @Input('surfCurrentHeight') actualElement: boolean;
  @Output('surfDefineHeight') passHeight = new EventEmitter();

  currentHeight: string;
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

  getHeight() {
    if (!this.actualElement) { return 0; }
    this.currentHeight = this.el.nativeElement.offsetHeight;
  }

  @HostListener('click') getSelfHeight() {
    this.getHeight();
    this.passHeight.emit(this.currentHeight);
  }

}
