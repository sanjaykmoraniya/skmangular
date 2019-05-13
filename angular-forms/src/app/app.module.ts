import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './template-driven-forms/hero-form.component';
import { ReactiveFormsComponent } from './reactive-forms/form-control/reactive-forms.component';
import { FormGroupControlComponent } from './reactive-forms/form-group-control/form-group-control.component';
import { FormNestedGroupControlComponent } from './reactive-forms/form-nested-group-control/form-nested-group-control.component';
import { FormBuilderComponent } from './reactive-forms/form-builder/form-builder.component';
import { SimpleFormValidationComponent } from './reactive-forms/simple-form-validation/simple-form-validation.component';
import { DynamicControlFormArraysComponent } from './reactive-forms/dynamic-control-form-arrays/dynamic-control-form-arrays.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ReactiveFormsComponent,
    FormGroupControlComponent,
    FormNestedGroupControlComponent,
    FormBuilderComponent,
    SimpleFormValidationComponent,
    DynamicControlFormArraysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
