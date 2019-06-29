import { Component, OnInit } from '@angular/core';
import {SerEmployeeService} from '../../ser-employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor( private seremployeeservice: SerEmployeeService,private router: Router) {}

addEmployee(Name,Email,Title,Mob) {
    this.seremployeeservice.addEmployeeService(Name,Email,Title,Mob);
}
  ngOnInit() {
  }

}
