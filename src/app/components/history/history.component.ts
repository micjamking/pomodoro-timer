import { Component } from '@angular/core';
import { HistoryService } from '../../services/history/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent {

  constructor(
    private historyService: HistoryService
  ) { }

}
