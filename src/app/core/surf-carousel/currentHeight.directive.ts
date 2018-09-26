import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  Inject,
  OnDestroy,
  PLATFORM_ID
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ResizeService } from '../services/resize.service';
import { WINDOW } from '../services/window-ref.service';
import { isPlatformServer } from '@angular/common';

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
  @Input('surfCurrentHeight') actualElement = true;
  @Output() passHeight: EventEmitter<string> = new EventEmitter();

  currentHeight: string;
  constructor(private el: ElementRef,
              private resizeService: ResizeService,
              @Inject(WINDOW) private winRef: Window,
              @Inject(PLATFORM_ID) private platformId) { }

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
    this.currentHeight = this.el.nativeElement.offsetHeight + 'px';
    if (isPlatformServer(this.platformId)) {
      this.currentHeight = 'auto';
    }
  }

  @HostListener('click') getSelfHeight() {
    this.getHeight();
    this.passHeight.emit(this.currentHeight);
  }

}
