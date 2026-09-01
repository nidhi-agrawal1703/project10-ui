import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointServiceService {

  constructor() { }

  public SERVER_URL="http://localhost:8080"; 
  public USER=this.SERVER_URL+"/User";
  public ROLE=this.SERVER_URL+"/Role";
  public COLLEGE=this.SERVER_URL+"/College";
  public STUDENT=this.SERVER_URL+"/Student";
  public SUBJECT=this.SERVER_URL+"/Subject";
  public COURSE=this.SERVER_URL+"/Course";
  public TIMETABLE=this.SERVER_URL+"/TimeTable";
  public MARKSHEET=this.SERVER_URL+"/Marksheet";
  public FACULTY=this.SERVER_URL+"/Faculty";
  public INQUIRY =this.SERVER_URL+"/Inquiry";
  public BATCH=this.SERVER_URL+"/Batch";
  public PARKING=this.SERVER_URL+"/Parking";
  public BRANCH=this.SERVER_URL+"/Branch";
  public CUSTOMER=this.SERVER_URL+"/Customer";
}
