import { ModuleWithProviders, NgModule,
  Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MenuService } from './services/menu.service';

import { PageNotFoundComponent } from './page-not-found.component';
import { SurfCarouselModule } from './surf-carousel/surf-carousel.module';
import { CatchScrollOuterzoneDirective } from './directives/catch-scroll-outerzone.directive';
import { PassScrollingDataService } from './services/pass-scrolling-data.service';

import { ResizeService } from './services/resize.service';
import { WINDOW_PROVIDERS, browserWindowProvider, windowProvider } from './services/window-ref.service';
import { LocationService } from './services/location.service';

import { Logger } from './services/logger.service';
import { SwUpdatesService } from './sw-updates/sw-updates.service';
import { ScrollDirective } from './directives/scroll.directive';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  imports:      [ CommonModule, SurfCarouselModule ],
  declarations: [
    PageNotFoundComponent,
    CatchScrollOuterzoneDirective,
    ScrollDirective,
    ScrollToTopComponent
  ],
  exports:      [
    SurfCarouselModule,
    PageNotFoundComponent,
    CatchScrollOuterzoneDirective,
    ScrollDirective,
    ScrollToTopComponent
  ],
  providers: [
    // WindowRefService,
    // browserWindowProvider,
    // windowProvider,
    WINDOW_PROVIDERS,
    ResizeService,
    MenuService,
    PassScrollingDataService,
    LocationService,
    Logger,
    SwUpdatesService
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
  if (parentModule) {
    throw new Error(
      'CoreModule is already loaded. Import it in the AppModule only');
   }
  }

  /*static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: UserServiceConfig, useValue: config }
      ]
    };
  }*/

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule
    };
  }
}
