import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'surf-section-about-us',
  templateUrl: './surf-section-about-us.component.html',
  styleUrls: ['./surf-section-about-us.component.sass']
})
export class SurfSectionAboutUsComponent implements OnInit {
  isHidden = false;
  player: YT.Player;
  id = 'dNVhok5PlEI';
  isYoutubeVisible = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  savePlayer(player) {
    this.player = player;
    // console.log('player instance', player);
  }
  onStateChange(event) {
    // console.log('player state', event.data);
  }

  playVideo() {
    this.player.playVideo();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isYoutubeVisible = true;
    }
  }

}
