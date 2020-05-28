import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '../../core/services/document-ref.service';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'surf-section-about-us',
  templateUrl: './surf-section-about-us.component.html',
  styleUrls: ['./surf-section-about-us.component.sass']
})
export class SurfSectionAboutUsComponent implements OnInit {
  isHidden = false;
  id = 'dNVhok5PlEI';
  player: YouTubePlayer;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private docRef: Document) { }

  savePlayer(player: YouTubePlayer) {
    this.player = player;
    // console.log('player instance', player);
  }

  playVideo(player: YouTubePlayer) {
    player.playVideo();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const tag = this.docRef.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      this.docRef.body.appendChild(tag);
    }
  }

}
