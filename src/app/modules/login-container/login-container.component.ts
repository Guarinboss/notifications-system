import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-container',
  templateUrl: './templates/login-container.component.html',
  styleUrls: ['./styles/login-container.component.css']
})
export class LoginContainerComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  submitForm() {
    if (this.registerForm.valid) {
      // Form is valid, perform submission logic here
    } else {
      // Form is invalid, handle validation errors
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched() {
    for (const controlName in this.registerForm.controls) {
      if (this.registerForm.controls.hasOwnProperty(controlName)) {
        this.registerForm.controls[controlName].markAsTouched();
      }
    }
  }

  isFieldInvalid(fieldName: string) {
    const control = this.registerForm.get(fieldName);
    return control!.invalid && (control!.touched || control!.dirty);
  }

  isFieldValid(fieldName: string) {
    const control = this.registerForm.get(fieldName);
    return control!.valid && (control!.touched || control!.dirty);
  }

}
