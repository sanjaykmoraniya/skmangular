import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-nested-group-control',
  templateUrl: './form-nested-group-control.component.html',
})
export class FormNestedGroupControlComponent {
  firstNameLabel = 'First Name:';
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

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
