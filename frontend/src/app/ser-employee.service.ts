import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './components/index/employee';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SerEmployeeService {
	url = 'http://localhost:3000/emp';

  constructor(private http: HttpClient,private router: Router) { }

  addEmployeeService(Name,Email,Title,Mob){
  	const obj = {
      NAME: Name,
      EMAIL: Email,
      Mob: Mob,
      Title: Title
    };
  this.http.post(`${this.url}/add`, obj)
        .subscribe(res => console.log('Done'));
   this.router.navigate(['/index']);
  }

  getEmployee(){
  	return this.http.get(`${this.url}`);
  }

  deleteEmployee(id) {
    return this.http.get(`${this.url}/delete/${id}`);
}

viewEmployee(id) {
  return this
            .http
            .get(`${this.url}/view/${id}`);
  }

updateEmp(Name,Email,Title,Mob, id) {
	const obj = {
      NAME: Name,
      EMAIL: Email,
      Mob: Mob,
      Title: Title
    };
  this.http.post(`${this.url}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}

}
