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
import { HeroFormReactiveAsyncValidationComponent } from './reactive-forms/async-validation/hero-form-reactive.component';
import { HeroFormTemplateAsyncValidationComponent } from './template-driven-forms/async-validation/hero-form-template.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { UniqueAlterEgoValidatorDirective } from './shared/alter-ego.directive';
import { DynamicFormComponent } from './reactive-forms/dynamic-forms/dynamic-form.component';
import { DynamicFormQuestionComponent } from './reactive-forms/dynamic-forms/dynamic-form-question.component';
import { MylibComponent } from './mylib/observable/observable.component';
import { RxjsObservableComponent } from './mylib/rxjs-observable/rxjs-observable.component';
import { ObservableStudentComponent } from './students/observable-student/observable-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ReactiveFormsComponent,
    FormGroupControlComponent,
    FormNestedGroupControlComponent,
    FormBuilderComponent,
    SimpleFormValidationComponent,
    DynamicControlFormArraysComponent,
    HeroFormReactiveAsyncValidationComponent,
    HeroFormTemplateAsyncValidationComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective,
    DynamicFormComponent, DynamicFormQuestionComponent, MylibComponent, RxjsObservableComponent, ObservableStudentComponent
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
