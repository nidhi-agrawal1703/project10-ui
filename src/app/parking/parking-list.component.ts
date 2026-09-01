import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  
})
export class ParkingListComponent extends BaseListCtl {

  constructor(locator:ServiceLocatorService,route:ActivatedRoute){
    super(locator.endpoints.PARKING,locator,route);
  }
}
