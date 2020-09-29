import { Component } from '@angular/core';
import {Quotess} from './Quotess'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  isComplete = true;
  Quotess: Quotess[] = [
    new Quotess(
      '“The life infront of you is far more important than the life behind you.”',
      'Joel Osteen',
      'ReaganOwiti',
      new Date(2020, 4, 29)
    ),
    new Quotess(
      '“It is a delicious thing to write,to be no longer yourself but to move on in an entire universe of your own creation.”',
      'Gustave Flaubert',
      'Pres. Owiti Reagan',
      new Date(2020, 5, 20)
    ),
    new Quotess(
      '“When all else fails,write what your heart tells you.You cant depend on your eyes when your imagination is out of focus.”',
      'Mark Twain',
      'Reagan Owiti',
      new Date(2020, 9, 29)
    ),
  ];
  showDetails(index) {
    this.Quotess[index].showDetails = !this.Quotess[index].showDetails;
  }

  addQuote(quote) {
    if (quote.quote && quote.author && quote.publisher) {
      this.Quotess.push(quote);
    } else {
      quote.preventDefault();
    }
  }
  deletequote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.Quotess[index].quote}?`
      );

      if (toDelete) {
        this.Quotess.splice(index, 1);
      }
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
