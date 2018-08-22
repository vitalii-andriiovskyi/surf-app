import { Component, AfterViewInit } from '@angular/core';

import { Directive } from '@angular/core';

@Component({
  selector: 'surf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {   }

}
