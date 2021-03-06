import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SurfHomeRoutingModule } from './surf-home-routing.module';

import { SurfHomeComponent } from './surf-home.component';
import { SurfSectionBoardsComponent } from './surf-section-boards/surf-section-boards.component';
import { SurfCarouselModule } from '../core/surf-carousel/surf-carousel.module';
import { NgbTabsetGridedComponent } from './surf-section-boards/ngb-tabset-grided.component';
import { NgbTabsetExpandedComponent } from './surf-section-boards/ngb-tabset-expanded.component';

import { BoardService } from './board.service';
import { SurfSectionAboutUsComponent } from './surf-section-about-us/surf-section-about-us.component';
import { SurfSectionTeamComponent } from './surf-section-team/surf-section-team.component';
import { SurfSectionBlogComponent } from './surf-section-blog/surf-section-blog.component';
import { SurfSectionSocNetComponent } from './surf-section-soc-nets/surf-section-soc-net.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [
    SharedModule,
    SurfCarouselModule,
    YouTubePlayerModule,
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
