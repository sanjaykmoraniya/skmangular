/* tslint:disable: member-ordering */
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-form-async-validation-template',
  templateUrl: './hero-form-template.component.html',
  styleUrls: ['./hero-form-template.component.css'],
})
export class HeroFormTemplateAsyncValidationComponent {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.1', alterEgo: 'Dr.1', power: this.powers[0]};

}
