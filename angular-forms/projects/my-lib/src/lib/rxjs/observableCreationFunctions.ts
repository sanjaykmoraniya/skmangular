import { from, fromEvent, interval, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { TodoItem } from '../../model/todo-items';

export class ObservableCreationFunctions {
    subscription: Subscription;
    subscriptionObservableFromEvent: Subscription;
    subscriptionAjaxRequest: Subscription;

    // Create an observable from a promise
    CreateObservableFromPromise(url: string) {
        // Create an Observable out of a promise
        const data = from(fetch(url));
        // Subscribe to begin listening for async result
        data.subscribe({
            next(response) { console.log(response); },
            error(err) { console.error('Error: ' + err); },
            complete() { console.log('Completed'); }
        });
    }

    CreateObservableFromCounter() {

        // Create an Observable that will publish a value on an interval
        const secondsCounter = interval(1000);
        // Subscribe to begin publishing values
        this.subscription = secondsCounter.subscribe(n => {
            const message = `It's been ${n} seconds since subscribing!`;
            console.log(message);
            this.writeCordsOnUI({ text: message, ulId: 'myListCounter' });
        });

        // unsubscribe after 20 sec
        setTimeout(() => {
            this.subscription.unsubscribe();
        }, 20000);
    }

    unsubscribeCreateObservableFromCounter() {
        // unsubscribe on button click from UI
        this.subscription.unsubscribe();
    }

    CreateObservableFromEvent() {

        const el = document.getElementById('my-element');

        // Create an Observable that will publish mouse movements
        const mouseMoves = fromEvent(el, 'mousemove');

        // Subscribe to start listening for mouse-move events
        this.subscriptionObservableFromEvent = mouseMoves.subscribe((evt: MouseEvent) => {
            // Log coords of mouse movements
            const cords = `Coords: ${evt.clientX} X ${evt.clientY}`;
            console.log(cords);


            this.writeCordsOnUI({ text: cords, ulId: 'myListEvent' });

            // When the mouse is over the upper-left of the screen,
            // unsubscribe to stop listening for mouse movements
            if (evt.clientX < 60 && evt.clientY < 60) {
                this.subscriptionObservableFromEvent.unsubscribe();
            }
        });
    }

    private writeCordsOnUI(params) {
        // Get the <ul> element with id="myList"
        const list = document.getElementById(params.ulId);
        // As long as <ul> has a child node, remove it
        while (list.hasChildNodes() && list.childElementCount > 10) {
            list.removeChild(list.firstChild);
        }
        const randomNumber = (new Date()).getMilliseconds() % 5;
        const node = document.createElement('LI');
        node.setAttribute('class', 'democlass democlass' + randomNumber);
        const textNode = document.createTextNode(params.text);
        node.appendChild(textNode);
        list.appendChild(node);
    }

    unsubscribeCreateObservableFromEvent() {
        // unsubscribe on button click from UI
        this.subscriptionObservableFromEvent.unsubscribe();
    }

    CreateObservableThatCreatesAJAXRequest(requestUrl: string) {
        // Create an Observable that will create an AJAX request
        const apiData = ajax(requestUrl);
        // Subscribe to create the request
        this.subscriptionAjaxRequest = apiData.subscribe(res => {
            const divCreatesAJAXRequestResult = document.getElementById('divCreatesAJAXRequestResult');
            divCreatesAJAXRequestResult.innerText = JSON.stringify(res.response);
            console.log(res.status, res.response);
        });
    }

    unsubscribeCreateObservableThatCreatesAJAXRequest() {
        // unsubscribe on button click from UI
        this.subscriptionAjaxRequest.unsubscribe();
    }

}
