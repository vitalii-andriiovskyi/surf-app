import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { TeamData } from './team-data';
@Component({
  selector: 'surf-section-team',
  templateUrl: './surf-section-team.component.html',
  styleUrls: ['./surf-section-team.component.sass'],
})
export class SurfSectionTeamComponent implements OnInit, OnDestroy {
  private _fetchDataSubscription: Subscription;
  @Input() teamData: TeamData[];

  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  activeSlides: any;

  constructor() { }

  ngOnInit() {
    // this.getTeamData();
  }

  ngOnDestroy() {
    // this._fetchDataSubscription.unsubscribe();
  }

  // getTeamData() {
  //   this._fetchDataSubscription = this.teamService.getTeamData().subscribe((data) => {
  //     this.teamData = data;
  //   });
  // }

  getPassedData(data: any) {
    this.activeSlides = data;
    // console.log(this.activeSlides);
  }

}
