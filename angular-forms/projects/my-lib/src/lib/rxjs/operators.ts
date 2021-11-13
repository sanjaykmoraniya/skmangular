import { map, filter, catchError, retry, mergeMap, subscribeOn } from 'rxjs/operators';
import { of, pipe, interval, throwError, asyncScheduler, merge, asapScheduler, queueScheduler, fromEventPattern } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export class Operators {

    MapOperator() {
        const nums = of(1, 2, 3);

        const squareValues = map((val: number) => val * val);
        const squaredNums = squareValues(nums);

        squaredNums.subscribe(x => console.log(x));

        // Logs
        // 1
        // 4
        // 9
    }

    StandalonePipeFunction() {
        const nums = of(1, 2, 3, 4, 5);

        // Create a function that accepts an Observable.
        const squareOddVals = pipe(
            filter((n: number) => n % 2 !== 0),
            map(n => n * n)
        );

        // Create an Observable that will run the filter and map functions
        const squareOdd = squareOddVals(nums);

        // Subscribe to run the combined functions
        squareOdd.subscribe(x => console.log(x));
    }

    ObservablePipeFnction() {
        const squareOdd = of(1, 2, 3, 4, 5)
            .pipe(
                filter(n => n % 2 !== 0),
                map(n => n * n)
            );

        // Subscribe to get values
        squareOdd.subscribe(x => console.log(x));
    }

    CatchErrorOperator(url: string) {
        // Return "response" from the API. If an error happens,
        // return an empty array.
        const apiData = ajax(url).pipe(
            map(res => {
                if (!res.response) {
                    throw new Error('Value expected!');
                }
                return res.response;
            }),
            catchError(err => of([]))
        );

        apiData.subscribe({
            next(x) { console.log('data: ', x); },
            error(err) { console.log('errors already caught... will not run'); }
        });
    }

    RetryOperator(url: string) {
        const source = interval(1000);
        const example = source.pipe(
            mergeMap(val => {
                if (val > 5) {
                    return throwError('Error!');
                }
                return of(val);
            }),

            // retry 2 times on error
            retry(2)
        );

        const subscribe = example.subscribe({
            next: val => console.log(val),
            error: val => console.log(`${val}: Retried 2 times then quit!`)
        });
    }

    addClickHandler(handler) {
        document.addEventListener('click', handler);
        console.log('Add handler' + handler);
    }

    removeClickHandler(handler) {
        document.removeEventListener('click', handler);
        console.log('Remove handler' + handler);
    }

    testAnyOperator() {

        const clicks = fromEventPattern(
            this.addClickHandler,
            this.removeClickHandler
        );
        clicks.subscribe(x => console.log(x));
    }
}
