import { Component, OnInit } from '@angular/core';

import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {
  tabs: TabComponent[] = [];

  constructor() { }

  addTab( tab:TabComponent ) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }

    this.tabs.push(tab);
  }

  selectTab( tab:TabComponent ) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });

    tab.active = true
  }

  ngOnInit() {
  }

}
