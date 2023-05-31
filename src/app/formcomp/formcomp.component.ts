import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formcomp',
  templateUrl: './formcomp.component.html',
  styleUrls: ['./formcomp.component.css']
})
export class FormcompComponent implements OnInit {

   contactForm!:NgForm
  constructor() { }
 
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
   
  ngOnInit() {
    
  }
 
  onSubmit(contactForm:NgForm) {
    console.log(contactForm.value);
  }
}
 


export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}


