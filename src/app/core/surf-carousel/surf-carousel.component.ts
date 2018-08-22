import {  TemplateRef,
          Directive,
          Component,
          OnInit,
          OnDestroy,
          AfterViewInit,
          AfterViewChecked,
          AfterContentChecked,
          ViewChild,
          Input,
          QueryList,
          ContentChildren,
          Optional } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { BoardService } from '../../surf-home/board.service';

let nextId = 0;

export class NavPositionState {
  fixed?: boolean;
  bottomed?: boolean;
}

@Directive({selector: 'ng-template[carouselSlide]'})
export class CarouselSlideDirective {
  /**
   * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
   * Will be auto-generated if not provided.
   */
  @Input() id = `ngb-slide-${nextId++}`;
  constructor(public tplRef: TemplateRef<any>) {}
}



@Component({
  selector: 'surf-carousel',
  templateUrl: './surf-carousel.component.html',
  styleUrls: ['./surf-carousel.component.sass'],
  animations: [
    trigger('carouselState', [
      state('rightActive', style({transform: 'translateX(0)'})),
      state('leftActive',   style({transform: 'translateX(0)'})),
      // transition('active => inactive', animate('100ms ease-out')),
      transition('void => rightActive', [
        style({transform: 'translateX(100%)'}),
        animate(600)
      ]),
      transition('rightActive => void', [
        animate(600, style({transform: 'translateX(-100%)'}))
      ]),
      transition('void => leftActive', [
        style({transform: 'translateX(-100%)'}),
        animate(600)
      ]),
      transition('leftActive => void', [
        animate(600, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class SurfCarouselComponent implements OnInit, AfterContentChecked {

  @ContentChildren(CarouselSlideDirective) slides: QueryList<CarouselSlideDirective>;
  currentSlideId: string;
  prevSlideId: string;
  nextSlideId: string;
  // for disabling arrows left/right when slides are finished
  nextDisabled = false;
  prevDisabled = true;
  // for managing position of nav arrows left/right
  navPositionState: NavPositionState = {
    fixed: false,
    bottomed: false
  };

  // for animation of changes sliders; state can be either 'leftActive' or 'rightActive'
  carouselSliderState = 'rightActive';
  // sets height of .carousel-stage. Every slide has "position: absolute". Thus .carousel-stage gets height 0
  parentHeight: string;
  // property viewReady is needed for calculating the real height of slider and set this height to parent element
  // setting height is put on shoulders of directive surfCurrentHeight
  viewReady: boolean;

  // boardsData: BoardData[];
  // ids for every slide; example: ['slide1', 'slide2', 'slide3']
  slidersId: string[]; // this.slides.map(slide => slide.id);

  // property boardService is needed just for showing chosen tabs on each slide
  constructor(@Optional() private boardService: BoardService) {

   }

  ngOnInit() {
    // setTimeout(() => {
    //   // get ids for every slide
    //   this.slidersId = this.slides.map(slide => slide.id);
    //   this.currentSlideId = this.slidersId[0];
    //   this.nextSlideId = this.slidersId[1];
    //   this.viewReady = true;
    // }, 0);

  }

  ngAfterContentChecked() {
    if (!this.viewReady) {
      // get ids for every slide
      this.slidersId = this.slides.map(slide => slide.id);
      this.currentSlideId = this.slidersId[0];
      this.nextSlideId = this.slidersId[1];
      this.viewReady = true;
    }
  }

  // ngAfterViewChecked() {
  //   // viewChild is set after the view has been initialized
  //   // setTimeout(() => { this.parentHeight = this.viewChildHeightDirective.childHeight + 'px'};
  //   // this.tick_then(() => this.viewReady = true);
  // }


  nextSlide() {
    if (this.nextDisabled) {
      return;
    }


    if (this.boardService) {
      this.boardService.setIdActivatedSlide(this.nextSlideId);
    }

    // get index of next Slide
    const index: number = this.slidersId.findIndex(elem => elem === this.nextSlideId);
    this.prevSlideId = this.currentSlideId;
    this.carouselSliderState = 'rightActive';


    // must wait in order to update animations states; it takes some time
    setTimeout(() => {

      this.currentSlideId = this.nextSlideId;

      if (index + 1 <= this.slidersId.length) {
        this.nextSlideId = this.slidersId[index + 1];
      } else {
        this.nextSlideId = this.slidersId[this.slidersId.length - 1];
      }
      this.prevDisabled = false;

      // looks for lastSlide and disables further right navigation
      if ( (index + 1) === this.slidersId.length ) {
        this.nextDisabled = true;
      }
    }, 1);
  }

  prevSlide() {
    if (this.prevDisabled) {
      return;
    }

    if (this.boardService) {
      this.boardService.setIdActivatedSlide(this.prevSlideId);
    }

    // get index of next Slide
    const index: number = this.slidersId.findIndex(elem => elem === this.prevSlideId);
    this.nextSlideId = this.currentSlideId;
    this.carouselSliderState = 'leftActive';

    // must wait in order to update animations states; it takes some time
    setTimeout(() => {
      this.currentSlideId = this.prevSlideId;

      if (index - 1 >= 0) {
        this.prevSlideId = this.slidersId[index - 1];
      } else {
        this.prevSlideId = this.slidersId[0];
      }
      this.nextDisabled = false;

      // looks for first Slide and disables further left navigation
      if ( (index) === 0 ) {
        this.prevDisabled = true;
      }

    }, 1);
  }

  // properties cannot be changed until change of View isn't finished
  tick_then(fn: () => any) { setTimeout(fn, 0); }

}
