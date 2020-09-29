import { Component, OnInit,Input } from '@angular/core';
import {Quotess} from '../Quotess'

@Component({
  selector: 'app-disquote',
  templateUrl: './disquote.component.html',
  styleUrls: ['./disquote.component.css']
})
export class DisquoteComponent implements OnInit {

  upVotes: number = 0
  downVotes: number = 0
            
  @Input() description: Quotess;

  add(tap: boolean) {
    if (tap) {
      this.upVotes++;
    }
    return this.upVotes
  }

  down(tap: boolean) {
    if (tap) {
      this.downVotes++;
    }
    return this.downVotes
  }



  constructor() { }

  ngOnInit(): void {
  }

}
