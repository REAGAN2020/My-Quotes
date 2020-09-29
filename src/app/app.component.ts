import { Component } from '@angular/core';
import {Quotess} from './Quotess'
  import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Quotess: Quotess[] = [
    new Quotess("“The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.”", "Michael Cain", "kenjoel", new Date(2020, 1, 29)),
    new Quotess("“When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.”"
      , "lex fridman", "Pres. Joel Muigai", new Date(2019, 5, 6)),
    new Quotess("“A successful man is one who can lay a firm foundation with the bricks others throw at him.”", "David Brinkly", "KenJoel Muigai", new Date(2020, 7, 21))
  ]
  showDetails(index) {
    this.Quotess[index].showDetails = !this.Quotess[index].showDetails;
  }

  addQuote(quote) {
    if (quote.quote && quote.author && quote.publisher) {
      this.Quotess.push(quote)
    } else {
      quote.preventDefault();
    }

  }
  constructor() { }

  ngOnInit(): void {
  }


}
