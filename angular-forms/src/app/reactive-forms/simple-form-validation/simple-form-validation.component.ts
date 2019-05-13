import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/forbidden-name.directive';

@Component({
  selector: 'app-simple-form-validation',
  templateUrl: './simple-form-validation.component.html',
  styles: []
})
export class SimpleFormValidationComponent {
  firstNameLabel = 'First Name:';
  profileForm = new FormGroup({
    // firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/bob/i)]),
    lastName: new FormControl('', [Validators.minLength(3)]),
    address: new FormGroup({
      street: new FormControl('', [Validators.required, Validators.minLength(3)]),
      city: new FormControl(['']),
      state: new FormControl(['']),
      zip: new FormControl([''])
    })
  });


  get firstName() { return this.profileForm.get('firstName'); }

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






