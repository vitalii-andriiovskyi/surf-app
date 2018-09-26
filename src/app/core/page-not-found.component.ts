import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'surf-not-found',
  template: `
  	<main class="common-page">
  		<h2>Page not found</h2>
  	</main>`,
  styles: [`
    h2 {
    	max-width: 1400px;
    	margin: 0 auto 4%;
    	line-height: 1em;
    }
  `]
})
export class PageNotFoundComponent implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Surf App | Page Not Found');
  }
}
