import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-control-form-arrays',
  templateUrl: './dynamic-control-form-arrays.component.html',
})
export class DynamicControlFormArraysComponent {
  firstNameLabel = 'First Name:';
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

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





