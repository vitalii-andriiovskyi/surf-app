import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { PassScrollingDataService } from '../services/pass-scrolling-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'surf-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.sass']
})
export class ScrollToTopComponent implements OnInit, OnDestroy {

  isHidden = true;
  scrollSubscription: Subscription;

  constructor(private zone: NgZone,
              private passScrollDataService: PassScrollingDataService) { }

  ngOnInit() {
    this.scrollSubscription = this.passScrollDataService.passerData.subscribe(
      (event) => this.showButton(event)
    );
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

  scrollToTop() {
    this.passScrollDataService.passNewScrollTop({newScrollTop: 0});
  }

  showButton(event) {
    this.zone.run(() => this.isHidden = event.target.scrollTop <= event.target.clientHeight * 0.5);
  }

}
