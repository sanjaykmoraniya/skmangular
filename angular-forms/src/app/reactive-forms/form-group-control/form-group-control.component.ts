import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group-control',
  templateUrl: './form-group-control.component.html'
})
export class FormGroupControlComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  onSubmit() {
    // TODO:: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.warn(this.profileForm);
  }
}

