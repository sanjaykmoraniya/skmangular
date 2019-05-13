import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent {
  firstNameLabel = 'First Name:';
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO:: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.warn(this.profileForm);
    this.profileForm.reset();
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  clearForm() {
    this.profileForm.reset();
  }
}





