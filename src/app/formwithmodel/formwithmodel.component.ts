import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formwithmodel',
  templateUrl: './formwithmodel.component.html',
  styleUrls: ['./formwithmodel.component.css']
})
export class FormwithmodelComponent implements OnInit {
  
  employee!:Employee

  constructor() { }

  ngOnInit(): void {
    this.employee = {
      Empid:0,
      Empname:'',
      Empdept:'',
      domain:'',
      location:'',
      salary:0
    }

  }
 
  onSubmit(empForm:Employee)
  {
    console.log(empForm)
  }

}
interface Employee
{
  Empid:number;
  Empname:string;
  Empdept:string;
  location:string;
  domain:string;
  salary:number;
}
