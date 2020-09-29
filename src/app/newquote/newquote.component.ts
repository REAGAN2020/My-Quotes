import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotess } from '../Quotess';
import { from } from 'rxjs';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css'],
})
export class NewquoteComponent implements OnInit {
  @Output() newQuote = new EventEmitter<Quotess>();

  quoteHolder = new Quotess('', '', '', new Date());

  renderContentToParent() {
    this.newQuote.emit(this.quoteHolder);
  }
  constructor() {}

  ngOnInit(): void {}
}
