import { Component,
         OnInit,
         AfterContentChecked,
         OnDestroy,
         Input,
         Directive,
         QueryList,
         ContentChildren,
         TemplateRef,
         ElementRef,
         Inject  } from '@angular/core';

import {  Subscription } from 'rxjs';

import { ResizeService } from '../resize.service';
import { WINDOW } from '../window-ref.service';
import { tap } from 'rxjs/operators';


let nextId = 0;

@Directive({selector: 'ng-template[carouselSlide]'})
export class CarouselSlideDirective {
  /**
   * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
   * Will be auto-generated if not provided.
   */
  @Input() id = `ngb-slide-${nextId++}`;
  constructor(public tplRef: TemplateRef<any>) {}
}

class SlidersData {
  id: string;
  active: boolean;
  activeDot?: boolean;
  sequenceN?: number;

  constructor(id: string, active: boolean, sequenceN?: number, activeDot?: boolean) {
    this.id = id;
    this.active = active;
    this.sequenceN = sequenceN || 0;
    this.activeDot = activeDot || false;
  }
}

class FirstActiveSlide {
    stage: string; // either 'first' or 'second'
    item: SlidersData;
    index: number;
}

class ResolutionCarouselData {
  [resolution: string]: number;
}


@Component({
  selector: 'surf-carousel-2',
  templateUrl: './surf-carousel-2.component.html',
  styleUrls: ['./surf-carousel-2.component.sass']
})
export class SurfCarousel2Component implements OnInit, AfterContentChecked, OnDestroy {

  @ContentChildren(CarouselSlideDirective) slides: QueryList<CarouselSlideDirective>;


  // number of visible sliders in carousel; it's needed for defining width of each slider
  private _slidersQuantity = 1;

  get slidersQuantity()   {
    if  ( this.isNumber(this._slidersQuantity) ) {
      return this._slidersQuantity;
    }
  }

  @Input() set slidersQuantity(quantity: any) {

    if ( this.isNumber(quantity) ) {
      this._slidersQuantity = quantity;
    }

    if ( this.isResolutionObj(quantity) ) {

      if (!this.resolutionCarouselData) {
        this.resolutionCarouselData = quantity;
      }

      if (this.carouselWindowWidth) {
        const slidersNumber = this.defineSlidersNumber();
        if (slidersNumber === this.slidersQuantity) {
          return;
        }
        this._slidersQuantity = slidersNumber;
      }
    }
  }

  // carousel can be cycled.
  @Input() cycled = false;

  // object with defined number of sliders for certain width of carousel
  resolutionCarouselData: ResolutionCarouselData;


  // width of carousel window (tag with class .surf-carousel-2-sliders-wrapper), in wich we can see moving sliders
  carouselWindowWidth: number;

  // width of each slider
  sliderWidth: number;

  // width of element which has two carousel-stage. Second stage is copy of first. It's needed in order to make carousel cycled
  stagesWrapperWidth: number;

  // width of carousel stage;
  stageWidth: number;

  // translateX of first carousel-stage; carousel-stage will move after changing CSS-rule transform: translateX()
  translateXFirstStage = 0;

  // At the beginning first carousel-stage is visible and second carousel-stage is invisible
  visibleFirstStage = 'visible';

  // translateX of second carousel-stage; carousel-stage will move after changing CSS-rule transform: translateX()
  translateXSecondStage = 10000000000;

  // At the beginning second carousel-stage is invisible. It can be visible if cycled is true
  visibleSecondStage = 'visible';

  // margin-top can be set to 0 or 2000. It can be set just for second stage. It's needed for lifting up second stage
  // and move it left/right unnoticeably for the eye of user
  marTop = 0;

  // state Disabled of left/prev navigation button/arrow. If cycled is true this property is always false
  prevDisabled: boolean;

  // state Disabled of right/next navigation button/arrow. If cycled is true this property is always false
  nextDisabled: boolean;

  // avaible translateX for right button
  avaibleRightTranslateX: number;

  // info about id and active/inactive state of each slider in first stage
  slidersFirstStageData: SlidersData[] = [];

  // info about id and active/inactive state of each slider in second stage
  slidersSecondStageData: SlidersData[] = [];

  resizeSubscription: Subscription;

  constructor(private el: ElementRef,
              private resizeService: ResizeService,
              @Inject(WINDOW) private winRef: Window) { }

  ngOnInit() {
    this.prevDisabled = this.cycled ? false : true;
    // this.nextDisabled = this.cycled ? false : true;

    // set quantity of sliders in initialization of component
    this.carouselWindowWidth = this.el.nativeElement.querySelector('.surf-carousel-2').clientWidth;
    if (this.resolutionCarouselData) {
      this.slidersQuantity = this.resolutionCarouselData;
    }

    this.resizeSubscription = this.resizeService.onResize$
      .pipe(
        tap(() => this.adoptToNewScreen())
      )
      .subscribe(() => {});
  }

  ngAfterContentChecked() {

    if (this.slides.toArray().length <= this.slidersQuantity && this.slidersQuantity !== 1) {
      this.slidersQuantity = this.slides.toArray().length - 1;
    }

    this.sliderWidth = Math.floor(this.carouselWindowWidth / this.slidersQuantity);
    this.stagesWrapperWidth = this.sliderWidth * this.slides.toArray().length * 2;
    this.stageWidth = this.sliderWidth * this.slides.toArray().length;
    this.avaibleRightTranslateX = this.sliderWidth * ( this.slides.toArray().length - this.slidersQuantity);

    // this.translateXSecondStage must be set at the beginning and not overwrite in ngAfterContentChecked()
    // cannot be set in ngOnInit() because it's needed to know number of slides at all
    if (this.translateXSecondStage === 10000000000) { this.translateXSecondStage = - this.stageWidth * 2; }

    // console.log(`sliderWidth: ${this.sliderWidth}; stageWidth: ${this.stageWidth}`);
    if ( !this.slidersFirstStageData.length ) {
      this.createCarouselData();
    }
    // if ( !this.slidersFirstStageData.length ) {
    //   this.slides.forEach((item, index) => {
    //     const active = this.slidersQuantity >= index + 1 ? true : false;
    //     this.slidersFirstStageData.push(new SlidersData(item.id, active));
    //   });
    // }

    // if ( this.cycled && !this.slidersSecondStageData.length ) {
    //   this.slides.forEach((item, index) => {
    //     this.slidersSecondStageData.push(new SlidersData(`second-${item.id}`, false));
    //   });
    // }
  }
  // ngAfterContentChecked() END

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

  nextSlide(pointer: number) {
    const firstActSlide: FirstActiveSlide = this.get1thActiveSlide(this.slidersFirstStageData, this.slidersSecondStageData);
    this.changeSlidersData(firstActSlide, pointer);
    this.setRightTranslatesX();
  }

  nextSlide1() {
    if (!this.cycled && this.nextDisabled) {
      return;
    }

    let translateXFirstStage = this.translateXFirstStage - this.sliderWidth;
    let translateXSecondStage = this.translateXSecondStage - this.sliderWidth;

      // make second stage visible when right side of first stage is bordering with right border of carousel window
    if (this.avaibleRightTranslateX === Math.abs(translateXFirstStage)) {
      if (!this.cycled) {
        this.nextDisabled = true;
      }
      // set first stage after second one when right side of second stage is bordering with right border of carousel window
    } else if ( this.stageWidth * 2 - this.sliderWidth * this.slidersQuantity === Math.abs(translateXSecondStage) ) {
      translateXFirstStage = this.sliderWidth * this.slidersQuantity;
    }
    // ****************************************************************

    if (translateXSecondStage === translateXFirstStage) {
      this.marTop = 0;
    }

    // ****************************************************************
      // check if second stage is completely locating before left border of carousel window
    if ( Math.abs(translateXSecondStage) > this.stageWidth * 2 ) {
       this.marTop = -2000;
       translateXSecondStage = translateXFirstStage;
    }

    // ****************************************************************
    this.translateXFirstStage = translateXFirstStage;
    this.translateXSecondStage = translateXSecondStage;
    this.defineActiveSliders();

    if (this.prevDisabled) { this.prevDisabled = false; }

  }

  prevSlide(pointer: number) {
    const firstActSlide: FirstActiveSlide = this.get1thActiveSlide(this.slidersFirstStageData, this.slidersSecondStageData);
    this.changeSlidersData(firstActSlide, pointer);
    this.setRightTranslatesX();
  }

  changeSlide(pointer: number) {
    const firstActSlide: FirstActiveSlide = this.get1thActiveSlide(this.slidersFirstStageData, this.slidersSecondStageData);
    this.changeSlidersData(firstActSlide, pointer);
    this.setRightTranslatesX();
  }

  // *********************************************************************

  prevSlide1() {
    if (!this.cycled && this.prevDisabled) { return; }

    let translateXFirstStage = this.translateXFirstStage + this.sliderWidth;
    let translateXSecondStage = this.translateXSecondStage + this.sliderWidth;

      // make second stage visible when left side of first stage is bordering with left border of carousel-window
    if (0 === Math.abs(translateXFirstStage)) {
      if (this.cycled) {
        translateXSecondStage = -this.stageWidth * 2;
        this.marTop = -2000;
      } else  {
        this.prevDisabled = true;
      }

      // set first stage before second one when left side of second stage is bordering with left border of carousel window
    } else if ( this.stageWidth === Math.abs(translateXSecondStage) ) {
      translateXFirstStage = - this.stageWidth;
    }
    // ****************************************************************

    if (Math.abs(translateXSecondStage) === this.stageWidth * 2 - this.sliderWidth ) {
      this.marTop = 0;
    }

    // ****************************************************************

    this.translateXFirstStage = translateXFirstStage;
    this.translateXSecondStage = translateXSecondStage;

    this.defineActiveSliders();

    if (this.nextDisabled) { this.nextDisabled = false; }
  }

  // ****************************************************

  defineActiveSliders() {
    // number of elements which must be deactivated on first stage before elements with class .active
    const disActiveSlidesFirstStageN = Math.abs(this.translateXFirstStage / this.sliderWidth);
    // number of elements which must be deactivated on second stage before elements with class .active
    let disActiveSlidesSecondStageN = (Math.abs( this.translateXSecondStage ) - this.stageWidth) / this.sliderWidth;
    disActiveSlidesSecondStageN = Math.max(disActiveSlidesSecondStageN, 0);
    let activatedElemNumber = 0;
    let lackingActiveElem: number;

    if ( this.translateXFirstStage < 0 ) {
      // for case when second stage is after first
      this.slidersFirstStageData.forEach((item, index) => {
           // disactivate all sliders before set of sliders with class .active; first Stage
        if (index + 1 <= disActiveSlidesFirstStageN) {
          item.active = false;
        } else if ( index + 1 >= disActiveSlidesFirstStageN + 1 && index + 1 <= this.slidersQuantity + disActiveSlidesFirstStageN) {
          item.active = true;
          activatedElemNumber++;
           // disactivate all sliders after set of sliders with class .active; first Stage
        } else if ( index + 1 > this.slidersQuantity + disActiveSlidesFirstStageN) {
          item.active = false;
        }
      });

      // this checking is needed in case when there are still visible last slides of first stage and
      // there become visible first slides of second stage
      if (this.cycled) {
        // const lackingActiveElem = this.slidersQuantity - activatedElemNumber;
        // number of lacking active slides includes number of disactivated slides preceding instance of active slides
        lackingActiveElem = this.slidersQuantity - activatedElemNumber + disActiveSlidesSecondStageN;
        this.slidersSecondStageData.forEach((item, index) => {
           // disactivate all sliders before set of sliders with class .active; second Stage
          if (disActiveSlidesSecondStageN > 0 && index + 1 <= disActiveSlidesSecondStageN) {
            item.active = false;
          } else if (index + 1 <= lackingActiveElem) {
            item.active = true;
            activatedElemNumber++;
           // disactivate all sliders after set of sliders with class .active; second Stage
          } else if ( index + 1 >= lackingActiveElem + 1) {
            item.active = false;
          }
        });
        // console.log(`${activatedElemNumber}::: translateXFirstStage: ${this.translateXFirstStage}`);
      }
      // reffers to code above: for case when stages are moving left after pressing right button; second stage is still after first
    } else {

      if (this.cycled) {
        // for case when second stage is before first
        this.slidersSecondStageData.forEach((item, index) => {
             // disactivate all sliders before set of sliders with class .active; second Stage
          if (disActiveSlidesSecondStageN !== 0 && index + 1 <= disActiveSlidesSecondStageN) {
              item.active = false;
           } else if (index + 1 >= disActiveSlidesSecondStageN + 1 && index + 1 <= this.slidersQuantity + disActiveSlidesSecondStageN) {
              item.active = true;
              activatedElemNumber++;
             // disactivate all sliders after set of sliders with class .active; second Stage
           } else if ( index + 1 > this.slidersQuantity + disActiveSlidesSecondStageN) {
              item.active = false;
           }
        });
      }

      lackingActiveElem = this.slidersQuantity - activatedElemNumber;
      this.slidersFirstStageData.forEach((item, index) => {
        if (index + 1 <= lackingActiveElem) {
          item.active = true;
          activatedElemNumber++;
           // disactivate all sliders after set of sliders with class .active; first Stage
        } else if ( index + 1 >= lackingActiveElem + 1) {
          item.active = false;
        }
      });
    }

  }

  // ****************************************************
  // defines number of sliders according to width of carousel. Function is actual when user defince input property resolutionCarouselData
  defineSlidersNumber() {
    let slidersNumber: number;
    for (const key in this.resolutionCarouselData) {

      if (this.carouselWindowWidth > +key) {
        slidersNumber = this.resolutionCarouselData[key];
      }
    }
    return slidersNumber;
  }


   // *********************************************************
  setRightTranslatesXResize() {
    // also says hom much inactive elements are in stage before active one
    let indexOf1Active: number;
    let translateLeftStage: number;
    let translateRightStage: number;

    if ( this.translateXFirstStage < 0 ) {
       // for case when second stage is after first
      indexOf1Active =  this.slidersFirstStageData.findIndex((value: SlidersData) => {
        return value.active === true;
      });

      if (indexOf1Active !== -1) {
        translateLeftStage = -indexOf1Active * this.sliderWidth;
        translateRightStage = translateLeftStage;

      } else {
        indexOf1Active =  this.slidersSecondStageData.findIndex((value: SlidersData) => {
          return value.active === true;
        });


        translateRightStage = -this.stageWidth - this.sliderWidth * indexOf1Active;
        translateLeftStage = translateRightStage;
        // checking for case when window width grows
        if (this.slides.toArray().length - indexOf1Active <= this.slidersQuantity ) {
          translateLeftStage = (this.slides.toArray().length - indexOf1Active) *  this.sliderWidth;
        }
      }

       // for case when first stage is after second
    } else if (this.cycled && this.translateXFirstStage === 0) {
        translateLeftStage = 0;
        translateRightStage = - this.stageWidth * 2;

    } else if (this.cycled) {
      indexOf1Active =  this.slidersSecondStageData.findIndex((value: SlidersData) => {
        return value.active === true;
      });
      if (indexOf1Active !== -1) {
        translateRightStage = -this.stageWidth - this.sliderWidth * indexOf1Active;
        translateLeftStage = (this.slides.toArray().length - indexOf1Active) *  this.sliderWidth;
      }

    }

    if (translateLeftStage) {
      this.translateXFirstStage = translateLeftStage;
    }

    if (translateRightStage) {
      this.translateXSecondStage = translateRightStage;
    }

    this.defineActiveSliders();

  }


  adoptToNewScreen() {
    const currentCarouselWidth = this.el.nativeElement.querySelector('.surf-carousel-2').clientWidth;
    if (currentCarouselWidth === this.carouselWindowWidth) {
      return;
    }

    this.carouselWindowWidth = currentCarouselWidth;
    if (this.resolutionCarouselData) {
      this.slidersQuantity = this.resolutionCarouselData;
      // console.log('changed number of sliders');
      if (this.slidersFirstStageData.length) {
        // this.setRightTranslatesXResize();
        this.changeSlide(1);
        this.changeSlide(-1);
      }
    }
  }

  // type checking
  isNumber(x: any): x is number {
    return typeof x === 'number';
  }

  isResolutionObj(x: any): x is ResolutionCarouselData {
      return typeof x === 'object';
  }

  createCarouselData() {
    if ( !this.slidersFirstStageData.length ) {
      this.slides.forEach((item, index) => {
        const active = this.slidersQuantity >= index + 1 ? true : false;
        const sequenceNumber = active ? index + 1 : 0;
        this.slidersFirstStageData.push(new SlidersData(item.id, active, sequenceNumber));
      });
    }

    if ( this.cycled && !this.slidersSecondStageData.length ) {
      this.slides.forEach((item, index) => {
        this.slidersSecondStageData.push(new SlidersData(`second-${item.id}`, false, 0));
      });
    }
  }

  get1thActiveSlide(stage1: SlidersData[], stage2: SlidersData[]): FirstActiveSlide {
    let result: FirstActiveSlide;

    stage1.forEach((item, index, array) => {
      if (item.sequenceN === 1) {
        result = {
          stage: 'first',
          item: item,
          index: index,
        };
      }
    });
    if (!result) {
      stage2.forEach((item, index, array) => {
        if (item.sequenceN === 1) {
          result = {
            stage: 'second',
            item: item,
            index: index,
          };
        }
      });
    }
    return result;
  }

  changeSlidersData(firstActSlide: FirstActiveSlide, nextPrev?: number, dotId?: string) {
    // disActiveSlidesFirstStageN is the number of elements which must be deactivated on first stage before elements with class .active
    // disActiveSlidesSecondStageN is the number of elements which must be deactivated on second stage before elements with class .active
    let disActiveSlidesFirstStageN: number,
        disActiveSlidesSecondStageN: number,
        activatedElemNumber = 0,
        lackingActiveElem: number;
    const stage1: SlidersData[] = this.slidersFirstStageData.map(x => Object.assign({}, x)),
          stage2: SlidersData[] = this.slidersSecondStageData.map(x => Object.assign({}, x));
    console.log(firstActSlide);
    if (firstActSlide.stage === 'first') {
      // if (firstActSlide.index === this.slidersFirstStageData.length - 1 && nextPrev > 0) {
      //   this.slidersFirstStageData[this.slidersFirstStageData.length - 1].active = false;
      //   lackingActiveElem = this.slidersQuantity;

      //   this.slidersSecondStageData.forEach((item, index) => {
      //     if (lackingActiveElem >= index + 1) {
      //       item.active = true;
      //     }
      //   });
      disActiveSlidesFirstStageN = firstActSlide.index + nextPrev;
      disActiveSlidesSecondStageN = disActiveSlidesFirstStageN < 0 ? 2 - stage2.length : 0;
      console.log(disActiveSlidesSecondStageN);
      stage1.forEach((item, index) => {
        // disactivate all sliders before set of sliders with class .active; first Stage
        if (index < disActiveSlidesFirstStageN) {
          item.active = false;
          item.sequenceN = 0;
        } else if ( index >= disActiveSlidesFirstStageN && index + 1 <= this.slidersQuantity + disActiveSlidesFirstStageN) {
          item.active = true;
          item.sequenceN -= nextPrev;
          if (nextPrev > 0 && item.sequenceN < 0) {
            item.sequenceN = this.slidersQuantity;
          }
          activatedElemNumber++;
            // disactivate all sliders after set of sliders with class .active; first Stage
        } else if ( index + 1 > this.slidersQuantity + disActiveSlidesFirstStageN) {
          item.active = false;
          item.sequenceN = 0;
        }
      });

      // this checking is needed in case when there are still visible last slides of first stage and
      // there become visible first slides of second stage
      if (this.cycled) {
        // const lackingActiveElem = this.slidersQuantity - activatedElemNumber;
        // number of lacking active slides includes number of disactivated slides preceding instance of active slides
        if (disActiveSlidesSecondStageN < 0 ) {
          stage2[stage2.length - 1].active = true;
          stage2[stage2.length - 1].sequenceN = 1;
        } else {
          lackingActiveElem = this.slidersQuantity - activatedElemNumber;
          stage2.forEach((item, index) => {
              // disactivate all sliders before set of sliders with class .active; second Stage
            if (disActiveSlidesSecondStageN > 0 && index + 1 <= disActiveSlidesSecondStageN) {
              item.active = false;
              item.sequenceN = 0;
            } else if (index + 1 <= lackingActiveElem) {
              item.active = true;
              item.sequenceN -= nextPrev;
              if (nextPrev > 0 && item.sequenceN < 0) {
                item.sequenceN = this.slidersQuantity;
              }
              activatedElemNumber++;
              // disactivate all sliders after set of sliders with class .active; second Stage
            } else if ( index + 1 >= lackingActiveElem + 1) {
              item.active = false;
              item.sequenceN = 0;
            }
          });
        }
        // console.log(`${activatedElemNumber}::: translateXFirstStage: ${this.translateXFirstStage}`);
      }
    } else if (firstActSlide.stage === 'second') {
      disActiveSlidesSecondStageN = firstActSlide.index + nextPrev;
      if (this.cycled) {
        // for case when second stage is before first
        stage2.forEach((item, index) => {
          // disactivate all sliders before set of sliders with class .active; second Stage
          if (disActiveSlidesSecondStageN !== 0 && index < disActiveSlidesSecondStageN) {
              item.active = false;
              item.sequenceN = 0;
           } else if (index >= disActiveSlidesSecondStageN && index + 1 <= this.slidersQuantity + disActiveSlidesSecondStageN) {
              item.active = true;
              item.sequenceN -= nextPrev;
              if (nextPrev > 0 && item.sequenceN < 0) {
                item.sequenceN = this.slidersQuantity;
              }
              activatedElemNumber++;
             // disactivate all sliders after set of sliders with class .active; second Stage
           } else if ( index + 1 > this.slidersQuantity + disActiveSlidesSecondStageN) {
              item.active = false;
              item.sequenceN = 0;
           }
        });
      }

      lackingActiveElem = this.slidersQuantity - activatedElemNumber;
      // if (lackingActiveElem === 0 ) {
      //   return;
      // }
      if (disActiveSlidesSecondStageN < 0) {
        stage1[stage1.length - 1].active = true;
        stage1[stage1.length - 1].sequenceN = 1;
      } else {
        stage1.forEach((item, index) => {
          if (index + 1 <= lackingActiveElem) {
            item.active = true;
            item.sequenceN -= nextPrev;
            if (nextPrev > 0 && item.sequenceN < 0) {
              item.sequenceN = this.slidersQuantity;
            }
            activatedElemNumber++;
            // disactivate all sliders after set of sliders with class .active; first Stage
          } else if ( index + 1 >= lackingActiveElem + 1) {
            item.active = false;
            item.sequenceN = 0;
          }
        });
      }
    }
    this.slidersFirstStageData = stage1;
    this.slidersSecondStageData = stage2;
    console.log(this.slidersSecondStageData);
    // console.log(stage1);
  }
  setRightTranslatesX() {
    // also says hom much inactive elements are in stage before active one
    let translateLeftStage: number;
    let translateRightStage: number;

    const firstActSlide: FirstActiveSlide = this.get1thActiveSlide(this.slidersFirstStageData, this.slidersSecondStageData);
    if ( firstActSlide.stage === 'first' ) {
      // for case when second stage is after first
      if (this.cycled && firstActSlide.index === 0) {
        translateLeftStage = 0;
        translateRightStage = - this.stageWidth * 2;
      } else {
        translateLeftStage = -firstActSlide.index * this.sliderWidth;
        translateRightStage = translateLeftStage;
      }
    } else if (this.cycled && firstActSlide.stage === 'second') {
      if (firstActSlide.index + this.slidersQuantity === this.slidersFirstStageData.length) {
        translateLeftStage = this.slidersQuantity * this.sliderWidth;
      } else if (firstActSlide.index === 0) {
        translateLeftStage = - this.slidersFirstStageData.length * this.sliderWidth;
      } else {
        translateLeftStage = (this.slides.toArray().length - firstActSlide.index) *  this.sliderWidth;
      }
      translateRightStage = -this.stageWidth - this.sliderWidth * firstActSlide.index;
    }

    if (translateLeftStage || translateLeftStage === 0) {
      this.translateXFirstStage = translateLeftStage;
    }

    if (translateRightStage) {
      this.translateXSecondStage = translateRightStage;
    }

  }
  // write right function for setting translateX() use setRightTranslatesXResize()
}
