import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivefrm',
  templateUrl: './reactivefrm.component.html',
  styleUrls: ['./reactivefrm.component.css']
})
export class ReactivefrmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contactForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  })

  
 
onSubmit() {
  console.log(this.contactForm.value);
}

}
