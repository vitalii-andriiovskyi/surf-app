import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollPageService } from '../services/scroll-page.service';
import { PassScrollingDataService } from '../pass-scrolling-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'surf-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.sass']
})
export class ScrollToTopComponent implements OnInit, OnDestroy {

  isHidden = true;
  scrollSubscription: Subscription;

  constructor(private scrollPageService: ScrollPageService,
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
    this.scrollPageService.passNewScrollTop({newScrollTop: 0});
  }

  showButton(event) {
    this.isHidden = event.target.scrollTop <= event.target.clientHeight * 1.5;
  }

}
