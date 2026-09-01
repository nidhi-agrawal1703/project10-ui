import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent extends BaseListCtl {

  constructor(locator:ServiceLocatorService,route:ActivatedRoute){
    super(locator.endpoints.BATCH,locator,route);
  }
}
