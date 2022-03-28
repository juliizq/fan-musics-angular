import { Component, OnInit } from '@angular/core';
import { Fan } from '../models/fan';
import { FanService } from '../services/fan.service';

@Component({
  selector: 'app-fan-list',
  templateUrl: './fan-list.component.html',
  styleUrls: ['./fan-list.component.scss']
})
export class FanListComponent implements OnInit {

  fans : Fan[] = [];

  constructor(private fanService : FanService) {

  }

  ngOnInit(): void {
    this.fans = [];
    this.fans = this.fanService.getFans();
  }

  deleteFan(fan : Fan){
    this.fanService.deleteFan(fan);
  }

}
