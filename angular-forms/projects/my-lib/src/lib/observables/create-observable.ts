import { Observable } from 'rxjs';

export class CreateObservable {

    // Create a new Observable that will deliver the below sequence
    sequence = new Observable(this.sequenceSubscriber);

    name(value: number) {
        return value;
    }

    // This function runs when subscribe() is called
    sequenceSubscriber(observer) {
        // synchronously deliver 1, 2, and 3, then complete
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next((() => { const i = 15; const j = 25; return i + j; })());
        // Function to generate error. So error function invoke
        observer.error({ message: 'Custome error' });
        observer.next((() => { const i = null; i.value.toString(); })());
        observer.complete();

        // unsubscribe function doesn't need to do anything in this
        // because values are delivered synchronously
        return { unsubscribe() { } };
    }


    createObservableWithConstructor() {
        // execute the Observable and print the result of each notification
        console.log('Create Observable with constructor');
        this.sequence.subscribe({
            next(num) { console.log(num); },
            error(e) {
                console.log('Error:' + e.message);
            },
            complete() { console.log('Finished sequence'); }
        });
    }

    fromEvent(target, eventName) {
        return new Observable((observer) => {
            const handler = (e) => observer.next(e);

            // Add the event handler to the target
            target.addEventListener(eventName, handler);

            return () => {
                // Detach the event handler from the target
                target.removeEventListener(eventName, handler);
            };
        });
    }
}
