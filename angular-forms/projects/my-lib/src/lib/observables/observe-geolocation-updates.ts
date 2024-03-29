import { Observable } from 'rxjs';

export class MyLibObservable {

    // Create an Observable that will start listening to geolocation updates
    // when a consumer subscribes.
    locations = new Observable((observer) => {
        // Get the next and error callbacks. These will be passed in when
        // the consumer subscribes.
        const { next, error } = observer;
        let watchId;

        // Simple geolocation API check provides values to publish
        if ('geolocation' in navigator) {
            watchId = navigator.geolocation.watchPosition(next, error);
        } else {
            error('Geolocation not available');
        }

        // When the consumer unsubscribes, clean up data ready for next subscription.
        return {
            unsubscribe() {
                navigator.geolocation.clearWatch(watchId);
            }
        };
    });

    subscribeMyLocation() {
        // Call subscribe() to start listening for updates.
        const locationsSubscription = this.locations.subscribe({
            next(position) {
                console.log('Current Position: ', position);
            },
            error(msg) {
                console.log('Error Getting Location: ', msg);
            }

            // complete() {
            //     console.log('Complete');
            // }

        });

        // Stop listening for location after 10 seconds
        setTimeout(() => { locationsSubscription.unsubscribe(); }, 10000);
    }
}

