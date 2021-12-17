import { Component, AfterViewInit } from '@angular/core';
import { CarouselDashComponent } from '../dashboard/carousel-dash/carousel-dash.component'
//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() {}
}
