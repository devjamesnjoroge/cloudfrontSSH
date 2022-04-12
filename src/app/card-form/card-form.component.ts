import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  @Output() addNewItem = new EventEmitter<any>();

  newItemEvent(x: string, y: any) {

    let newCard = new Card(x, y)

    this.addNewItem.emit(newCard)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
