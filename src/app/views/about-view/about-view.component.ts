import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html'
})
export class AboutViewComponent implements OnInit {
  public currentYear: number;

  constructor() { }

  ngOnInit() {
    let date = new Date();
    this.currentYear = date.getFullYear();
  }

}
