import { Component, OnInit } from '@angular/core';
import { MyLibObservable } from 'projects/my-lib/src/lib/observables/observe-geolocation-updates';
import { SubscribeObserver } from 'projects/my-lib/src/lib/observables/subscribe-using-observer';
import { of } from 'rxjs';
import { CreateObservable } from 'projects/my-lib/src/lib/observables/create-observable';
import { Multicasting } from 'projects/my-lib/src/lib/observables/multicasting';

@Component({
  selector: 'app-mylib',
  templateUrl: './observable.component.html',
  styles: [],
  providers: [MyLibObservable, SubscribeObserver]
})
export class MylibComponent implements OnInit {

  constructor(private myLibObj: MyLibObservable, private obj: SubscribeObserver) {
    //// Observe geolocation updates
    // myLibObj.subscribeMyLocation();

    //// Subscribe using observer
    // obj.subscribeUsingObserver();

    //// Create Observable with constructor
    // const createObservable = new CreateObservable();
    // createObservable.createObservableWithConstructor();

    //// Multicasting
    const multicasting = new Multicasting();
    // multicasting.CreateDelayedSequence();
    //// Multicasting two subscription
    // multicasting.CreateDelayedSequenceTwoSubscriptions();
    //// CreateMulticastSubscriber
    // multicasting.CreateMulticastSubscriber();
  }

  useCustomFromEvent(createObservable) {
    const ESC_KEY = 27;
    const nameInput = document.getElementById('nameFromEventInput') as HTMLInputElement;

    const subscription = createObservable.fromEvent(nameInput, 'keydown')
      .subscribe((e: KeyboardEvent) => {
        if (e.keyCode === ESC_KEY) {
          nameInput.value = '';
          subscription.unsubscribe();
        }
      });
  }

  ngOnInit() {
    // Create with custom fromEvent function
    const createObservable = new CreateObservable();
    this.useCustomFromEvent(createObservable);
  }

  subscribeFromEvent() {
    const createObservable = new CreateObservable();
    this.useCustomFromEvent(createObservable);
  }
}



