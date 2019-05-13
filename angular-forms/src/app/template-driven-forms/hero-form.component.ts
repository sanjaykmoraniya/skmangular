import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-template-form',
  templateUrl: './hero-form.component.html',
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  onSubmit() { this.submitted = true; }

}
