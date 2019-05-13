import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsComponent {
  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }

  clearName() {
    this.name.setValue('');
  }
}
