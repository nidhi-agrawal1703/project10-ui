import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  
})
export class ParkingComponent extends BaseCtl{

    constructor(public locator:ServiceLocatorService,route:ActivatedRoute,private httpClient:HttpClient){
      super(locator.endpoints.PARKING,locator,route);
    }
}
