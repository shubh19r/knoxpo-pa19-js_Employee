import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { IndexComponent } from './components/index/index.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SerEmployeeService } from './ser-employee.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: 'add',
    component: AddEmployeeComponent
  },
  {
    path: '',
    component: AddEmployeeComponent
  },
  {
    path: 'edit/:id',
    component: ViewEmployeeComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'dummy',
    component: IndexComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SerEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
