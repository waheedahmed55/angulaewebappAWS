import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import{Employees} from './Employees'

@Component({
  selector: 'app-eventinfo',
  templateUrl: './eventinfo.component.html',
  styleUrls: ['./eventinfo.component.scss']
})
export class EventinfoComponent implements OnInit {
  prayer: [] = [];
  location: [] = [];
  employees: Employees[] = [];
  columns = ["User Id","Employee Name","Employee Salary", "Age"];
  index = ["id", "employee_name", "employee_salary", "employee_age"];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.GetPrayerDetails();
    this.GetPrayerLocation();
    this.GetEmployees();
  }


  GetPrayerDetails() {
this.httpService.Get('../../../assets/prayer.json').subscribe(response => {
this.prayer = response;
console.log(this.prayer);
});
}
GetPrayerLocation() {
  this.httpService.Get('../../../assets/location.json').subscribe(response => {
  this.location = response;
  console.log(this.location);
  });
  }
  GetEmployees(){
    
    this.httpService.Get('https://dummy.restapiexample.com/api/v1/employees').subscribe(response=>{
     // this.employees=response;
     // this.employees=JSON.parse(response);
    this.employees = response.data;
      
      console.log(this.employees);
    });
  }
}
