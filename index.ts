// RxJS v6+
import { range } from "rxjs";
import { skip } from "rxjs/operators";

/*
 Filtering Operator: skip
 ------------------------

 Skip the **count** number of emitted values.
 ```
 skip(count: number): Observable
 ```

 http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-skip
*/

// Emit: 0, 1, 2, ..., 8
const source = range(9);

// Skip the first 6 emitted values
const example = source.pipe(skip(6));

// Receive: 6, 7, 8
console.log("[start]");
example.subscribe({
  complete: () => console.log("[complete]"),
  error: err => console.error("[error] : ", err),
  next: value => console.log("[next] : ", value)
});
