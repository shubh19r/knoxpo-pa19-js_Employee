import { Component, OnInit } from '@angular/core';
import {Employee} from './employee'
import {SerEmployeeService} from '../../ser-employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

	Emp: Employee[];

  constructor(private seremployeeservice: SerEmployeeService,private router: Router) { }

  ngOnInit() {
    this.seremployeeservice
      .getEmployee()
      .subscribe((data: Employee[]) => {
      this.Emp = data;
    });
  }

  deleteEmployee(id) {
    this.seremployeeservice.deleteEmployee(id).subscribe(res => {
      console.log('Deleted');
      this.router.navigateByUrl('/dummy', {skipLocationChange: true}).then(() => 
      	this.router.navigate(['/index']));

    });
  }

}
