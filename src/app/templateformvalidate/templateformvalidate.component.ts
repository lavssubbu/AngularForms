import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateformvalidate',
  templateUrl: './templateformvalidate.component.html',
  styleUrls: ['./templateformvalidate.component.css']
})
export class TemplateformvalidateComponent implements OnInit {

  title = 'Template driven forms';
 
  
  contact: contact = {
    firstname: "",
    lastname: "",
    gender: "male",
    isToc: true,
    email: ""
  };

  ngOnInit() {
    // ...
  }

  onSubmit(cntForm: NgForm) {
    console.log(cntForm);
  }
}
 
export class contact {
  firstname!: string;
  lastname?: string;
  gender?: string;
  isToc?: boolean;
  email?: string;
}