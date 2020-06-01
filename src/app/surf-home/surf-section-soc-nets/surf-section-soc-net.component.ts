import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { FacebookService, InitParams } from 'ngx-facebook-fb';

@Component({
  selector: 'surf-section-soc-net',
  templateUrl: './surf-section-soc-net.component.html',
  styleUrls: ['./surf-section-soc-net.component.sass']
})
export class SurfSectionSocNetComponent implements OnInit {

  constructor(private fb: FacebookService,
              @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      const initParams: InitParams = { appId: '', xfbml: true, version: 'v2.8' };
      fb.init(initParams);
    }
  }

  ngOnInit() {
  }

}
