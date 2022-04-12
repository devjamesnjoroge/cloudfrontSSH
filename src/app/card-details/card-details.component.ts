import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Output() isRead = new EventEmitter<any>();

  @Input()
  card!: Card;

  readComplete(value: any) {
    this.isRead.emit(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
