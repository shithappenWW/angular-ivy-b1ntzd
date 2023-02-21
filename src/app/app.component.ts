import { Component } from '@angular/core';
import { Observable, of, map, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //define numbers$ as an observable
  numbers$: Observable<number>;
  constructor() {}
}
// create the array
const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//subscribing to the observable
numbers$.subscribe((value) => console.log(value));

//manipulate data using map
numbers$
  .pipe(map((value) => value * 2))
  .subscribe((value) => console.log(value));

//create an obserable with an array with  an array of user objects
const users = [
  { id: 1, name: 'Alice', Age: 25 },
  { id: 2, name: 'Bob', Age: 30 },
  { id: 3, name: 'Charlie', Age: 35 },
  { id: 4, name: 'Dave', Age: 40 },
];
//create the observable
const user$ = from(users);

//subscribing to this observable
user$.subscribe((user) => console.log(user));

//use the  appropriate 'rxjs' operators filter to display only user whose age is more than 30
user$
  .pipe(
    map((user) => ({
      id: user.id,
      name: user.name.toUpperCase(),
      Age: user.Age * 2,
    }))
  )
  .subscribe((user) => console.log(user));
//name displayed in ALL CAPS

//user 'rxjs' operator to display the name in uppercase and age is doubled.
