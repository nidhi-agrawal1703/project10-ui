import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';


@Component({
  selector: 'app-inquiry-list',
  templateUrl: './inquiry-list.component.html',
  styleUrls: ['./inquiry-list.component.css']
})
export class InquiryListComponent extends BaseListCtl {

  constructor(locator :ServiceLocatorService,route:ActivatedRoute){
      super(locator.endpoints.INQUIRY,locator,route);
    }
}
