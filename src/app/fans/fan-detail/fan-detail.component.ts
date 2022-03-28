import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fan } from '../models/fan';
import { FanService } from '../services/fan.service';



@Component({
  selector: 'app-fan-detail',
  templateUrl: './fan-detail.component.html',
  styleUrls: ['./fan-detail.component.scss']
})
export class FanDetailComponent implements OnInit {

  fan : Fan;
  constructor(private activatedRoute: ActivatedRoute, private fanService : FanService, private router: Router) { 

    const id = this.activatedRoute.snapshot.params['id'];
    
    const fanInService = this.fanService.getFanById(parseInt(id));
    if(fanInService){
      this.fan = fanInService;
    }else{
      this.router.navigate([''])
    }

  }

  ngOnInit(): void {
  }

}
