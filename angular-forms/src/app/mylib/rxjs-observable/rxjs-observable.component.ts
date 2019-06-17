import { Component, OnInit } from '@angular/core';
import { ObservableCreationFunctions } from 'projects/my-lib/src/lib/rxjs/observableCreationFunctions';
import { Operators } from 'projects/my-lib/src/lib/rxjs/operators';

@Component({
  selector: 'app-rxjs-observable',
  templateUrl: './rxjs-observable.component.html',
  providers: [ObservableCreationFunctions]
})
export class RxjsObservableComponent implements OnInit {
  requestUrl = 'https://localhost:5001/api/todo';
  operators: Operators;
  constructor(private observableCreationFunctions: ObservableCreationFunctions) {
    this.operators = new Operators();
  }

  ngOnInit() {
    // this.observableCreationFunctions.CreateObservableFromPromise('/api/endpoint');
    // this.observableCreationFunctions.CreateObservableFromPromise(this.requestUrl);

    // this.observableCreationFunctions.CreateObservableFromCounter();
    // this.observableCreationFunctions.CreateObservableFromEvent();
    // this.observableCreationFunctions.CreateObservableThatCreatesAJAXRequest(this.requestUrl);

    // this.operators.MapOperator();
    // this.operators.StandalonePipeFunction();
    /// this.operators.CatchErrorOperator(this.requestUrl + '/9999');
    // this.operators.RetryOperator(this.requestUrl + '/9999');
    this.operators.testAnyOperator();

  }

  onSubscribeCreateObservableFromCounterClick() {
    this.observableCreationFunctions.CreateObservableFromCounter();
  }

  onUnsubscribeCreateObservableFromCounterClick() {
    this.observableCreationFunctions.unsubscribeCreateObservableFromCounter();
  }

  onSubscribeCreateObservableFromEventClick() {
    this.observableCreationFunctions.CreateObservableFromEvent();
  }

  onUnsubscribeCreateObservableFromEventClick() {
    this.observableCreationFunctions.unsubscribeCreateObservableFromEvent();
  }
}
