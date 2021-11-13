
import { of, Observable } from 'rxjs';

export class SubscribeObserver {
    // Create simple observable that emits three values
    myObservable = of(() => { const i = 10; const j = 20; return i + j; }, 2, 3);

    // Create observer object
    myObserver = {
        next: x => console.log('Observer got a next value: ' + (typeof (x) === 'function' ? x() : x)),
        error: err => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification'),
    };

    subscribeUsingObserver() {
        // Subscribe using observer
        // Execute with the observer object
        this.myObservable.subscribe(this.myObserver);

        // Subscribe with positional arguments
        this.myObservable.subscribe(
            x => console.log('Positional arguments: Observer got a next value: ' + (typeof (x) === 'function' ? x() : x)),
            err => console.error('Positional arguments: Observer got an error: ' + err),
            () => console.log('Positional arguments: Observer got a complete notification')
        );
    }



    // Logs: for: myObservable = of(1, 2, 3);
    // Observer got a next value: 1
    // Observer got a next value: 2
    // Observer got a next value: 3
    // Observer got a complete notification

    // Logs: for: myObservable = of(() => { const i = 10; const j = 20; return i + j; }, 2, 3);
    // Observer got a next value: 30
    // Observer got a next value: 2
    // Observer got a next value: 3
    // Observer got a complete notification
}
