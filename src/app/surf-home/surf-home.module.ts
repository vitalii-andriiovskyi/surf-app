import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SurfHomeRoutingModule } from './surf-home-routing.module';

import { SurfHomeComponent } from './surf-home.component';
import { SurfSectionBoardsComponent } from './surf-section-boards/surf-section-boards.component';
import { SurfCarouselModule } from '../core/surf-carousel/surf-carousel.module';
import { SurfCarousel2Module } from '../core/surf-carousel-2/surf-carousel-2.module';
import { NgbTabsetGridedComponent } from './surf-section-boards/ngb-tabset-grided.component';
import { NgbTabsetExpandedComponent } from './surf-section-boards/ngb-tabset-expanded.component';

import { BoardService } from './board.service';
import { SurfSectionAboutUsComponent } from './surf-section-about-us/surf-section-about-us.component';
import { SurfSectionTeamComponent } from './surf-section-team/surf-section-team.component';
import { SurfSectionBlogComponent } from './surf-section-blog/surf-section-blog.component';
import { SurfSectionSocNetComponent } from './surf-section-soc-nets/surf-section-soc-net.component';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [
    SharedModule,
    SurfCarouselModule,
    SurfCarousel2Module,
    YoutubePlayerModule,
    SurfHomeRoutingModule,
    CarouselModule
  ],
  declarations: [
    SurfHomeComponent,
    SurfSectionBoardsComponent,
    NgbTabsetGridedComponent,
    NgbTabsetExpandedComponent,
    SurfSectionAboutUsComponent,
    SurfSectionTeamComponent,
    SurfSectionBlogComponent,
    SurfSectionSocNetComponent
  ],
  exports: [
    SurfHomeComponent,
    SharedModule
  ],
  providers: [
    BoardService
  ]
})
export class SurfHomeModule { }
