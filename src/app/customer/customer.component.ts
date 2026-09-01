import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent extends BaseCtl{

  constructor(public locator:ServiceLocatorService,route:ActivatedRoute,private httpClient:HttpClient){
    super(locator.endpoints.CUSTOMER,locator,route);
  }
}
