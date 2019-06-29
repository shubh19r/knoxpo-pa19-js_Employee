import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Employee} from '../index/employee'
import {SerEmployeeService} from '../../ser-employee.service'
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
	emp: any = {};
	angForm: FormGroup;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private seremployeeservice: SerEmployeeService,
    private fb: FormBuilder) {
      this.createForm();
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.seremployeeservice.viewEmployee(params['id']).subscribe(res => {
          this.emp = res;
      });
    });
  }

   createForm() {
      this.angForm = this.fb.group({
             Name: ['', Validators.required ],
             Email: ['', Validators.required ],
             Mob: ['', Validators.required ],
             Title: ['', Validators.required ]
         });
      }


  updateEmployee(name,email,title,mob) {
   this.route.params.subscribe(params => {
      this.seremployeeservice.updateEmp(name,email,title,mob, params['id']);
      this.router.navigate(['index']);
   });
}

}
