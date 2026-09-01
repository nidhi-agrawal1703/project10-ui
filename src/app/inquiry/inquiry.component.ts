import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent extends BaseCtl {

  constructor(public locator:ServiceLocatorService,route:ActivatedRoute,private httpClient:HttpClient){
    
    super(locator.endpoints.INQUIRY, locator, route);
    console.log(this.form.data);
  }
  
}
