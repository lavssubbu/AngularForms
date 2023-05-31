import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveformvalidate',
  templateUrl: './reactiveformvalidate.component.html',
  styleUrls: ['./reactiveformvalidate.component.css']
})
export class ReactiveformvalidateComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.myForm.invalid) {
      // Handle invalid form submission
      return;
    }

    // Form is valid, perform submission logic
    console.log(this.myForm.value);

    // Reset the form
    this.myForm.reset();
  }
}
