import { TwddServiceService } from './../twdd-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {
  user: Object = {};
  shareTime=[];

  constructor(private twddService: TwddServiceService) {
    this.user = this.twddService.getUser();
    this.shareTime = this.user['shareTime'];
  }

  ngOnInit() {
    
  }

}
