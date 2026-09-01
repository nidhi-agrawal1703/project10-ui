import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent extends BaseCtl {

  constructor(public locator:ServiceLocatorService,route:ActivatedRoute,private httpClient:HttpClient){

    super(locator.endpoints.BATCH,locator,route);
  }
}
