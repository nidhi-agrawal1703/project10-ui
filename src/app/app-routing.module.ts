import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role/role-list.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college/college-list.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { ForgetpasswordComponent } from './login/forgetpassword.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { MyprofileComponent } from './user/myprofile.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { InquiryListComponent } from './inquiry/inquiry-list.component';
import { BatchComponent } from './batch/batch.component';
import { BatchListComponent } from './batch/batch-list.component';
import { MeritListComponent } from './marksheet/merit-list.component';
import { GetMarksheetComponent } from './marksheet/get-marksheet.component';
import { ParkingComponent } from './parking/parking.component';
import { ParkingListComponent } from './parking/parking-list.component';
import { BranchComponent } from './branch/branch.component';
import { BranchListComponent } from './branch/branch-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/customer-list.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dashboard'
  },
   {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'userlist',
    component:UserListComponent
  },
   {
    path:'user/:id',
    component:UserComponent
  },
   {
    path:'role',
    component:RoleComponent
  },
  {
    path:'rolelist',
    component:RoleListComponent
  },
  {
    path:'role/:id',
    component:RoleComponent
  },
  {
    path:'college',
    component:CollegeComponent
  },
  {
    path:'collegelist',
    component:CollegeListComponent
  },
  {
    path:'college/:id',
    component:CollegeComponent
  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'courselist',
    component:CourseListComponent
  },
  {
    path:'course/:id',
    component:CourseComponent
  },
  {
    path:'faculty',
    component:FacultyComponent
  },
  {
    path:'facultylist',
    component:FacultyListComponent
  },
  {
    path:'faculty/:id',
    component:FacultyComponent
  },
  {
    path:'marksheet',
    component:MarksheetComponent
  },
  {
    path:'marksheetlist',
    component:MarksheetListComponent
  },
  {
    path:'marksheet/:id',
    component:MarksheetComponent
  },
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'studentlist',
    component:StudentListComponent
  },
  {
    path:'student/:id',
    component:StudentComponent
  },
  {
    path:'subject',
    component:SubjectComponent
  },
   {
    path:'subjectlist',
    component:SubjectListComponent
  },
  {
    path:'subject/:id',
    component:SubjectComponent
  },
  {
    path:'timetable',
    component:TimetableComponent
  },
   {
    path:'timetablelist',
    component:TimetableListComponent
  },
  {
    path:'timetable/:id',
    component:TimetableComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'forgetpassword',
    component:ForgetpasswordComponent
  },
  {
    path:'changepassword',
    component:ChangepasswordComponent
  },
  {
    path:'myprofile',
    component:MyprofileComponent
  },
  { path: 'myprofile/:id', 
    component: MyprofileComponent
   },
  {
    path:'inquiry',
    component:InquiryComponent
  },
  {
    path:'inquiry/:id',
    component:InquiryComponent
  },
  {
    path:'inquirylist',
    component:InquiryListComponent
  },
  {
    path:'batch',
    component:BatchComponent
  },
  {
    path:'batch/:id',
    component:BatchComponent
  },
  {
    path:'batchlist',
    component:BatchListComponent
  },
  {
    path:'meritlist',
    component: MeritListComponent
  },
  {
    path:'getmarksheet',
    component: GetMarksheetComponent
  },
  {
    path:'parking',
    component:ParkingComponent
  },
  {
    path:'parking/:id',
    component:ParkingComponent
  },
  {
    path:'parkinglist',
    component:ParkingListComponent
  },
  {
    path:'branch',
    component:BranchComponent
  },
  {
    path:'branch/:id',
    component:BranchComponent
  },
  {
    path:'branchlist',
    component:BranchListComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:'customer/:id',
    component:CustomerComponent
  },
  {
    path:'customerlist',
    component:CustomerListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
