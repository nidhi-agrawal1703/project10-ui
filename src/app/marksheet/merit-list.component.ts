import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-merit-list',
  templateUrl: './merit-list.component.html',
  styleUrls: ['./merit-list.component.css']
})
export class MeritListComponent extends BaseListCtl {

  constructor(public locator:ServiceLocatorService,route:ActivatedRoute){
    super(locator.endpoints.MARKSHEET,locator,route);
  }

  //Override search method to call meritlist instead of search API
  override search(){

    var _self=this;
    const url=this.api.endpoint+"/meritList";

    this.locator.httpService.get(url,function(res:any){
      _self.form.message='';
      _self.form.list=[];
      if(res.success){
        _self.form.error=false;
        _self.form.list=res.result.list;
        // Add rank to each item
        _self.form.list.forEach((item: any, index: number) => {
          item.rank = index + 1;
        });
      }else{
        _self.form.error=true;
        _self.form.message=res.result.message || "Failed to Load Merit List";
      }
    },function(error:any){
      _self.form.error=true;
      _self.form.message="Error Loading Merit List.Please try Again";
      _self.form.list=[];
    });
  }

  //Calculate Total Marks
  getTotal(marksheet:any):number{
    return (marksheet.maths || 0) + (marksheet.physics || 0) + (marksheet.chemistry || 0);
  }

  //Calculate Percentage
  getPercentage(marksheet:any):number{
    const total=this.getTotal(marksheet);
    return (total*100)/300;
  }

  //Get Grade Based on Percentage
  getGrade(marksheet:any):string{

  const percentage = this.getPercentage(marksheet);

    if (percentage >= 90) return "A++";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B++";
    if (percentage >= 60) return "B";
    if (percentage >= 50) return "C++";
    if (percentage >= 40) return "C";
    if (percentage >= 35) return "D";
    return "F";

  }

  //Open Jasper Report
  openJasperReport(){
    window.open("http://localhost:8080/Jasper/report","_blank");
  }
}
