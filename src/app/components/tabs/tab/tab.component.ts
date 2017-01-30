import { Component, OnInit, Input } from '@angular/core';

import { TabsComponent } from '../tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {
  @Input() tabTitle;
  public active: Boolean = false

  constructor(
    private tabs: TabsComponent
  ) {
    tabs.addTab(this);
  }

  ngOnInit() {
  }

}
