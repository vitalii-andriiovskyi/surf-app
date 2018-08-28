import { Component, OnInit } from '@angular/core';
import { ScrollPageService } from '../services/scroll-page.service';

@Component({
  selector: 'surf-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.sass']
})
export class ScrollToTopComponent implements OnInit {

  isShown: false;

  constructor(private scrollPageService: ScrollPageService) { }

  ngOnInit() {
  }

  scrollToTop() {
    this.scrollPageService.passNewScrollTop({newScrollTop: 0});
  }

}
