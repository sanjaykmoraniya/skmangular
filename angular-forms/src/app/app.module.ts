/* These are JavaScript import statements. Angular doesn’t know anything about these. */
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
import { HttpClientModule } from '@angular/common/http';

// import the feature module here so you can add it to the imports array below
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
// import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard/customer-dashboard.component';

/* The @NgModule decorator lets Angular know that this is an NgModule. */
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
    DynamicFormComponent, DynamicFormQuestionComponent, MylibComponent, RxjsObservableComponent, ObservableStudentComponent,
    // CustomerDashboardComponent
  ],
  imports: [ /* These are NgModule imports. */
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomerDashboardModule // add the feature module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
