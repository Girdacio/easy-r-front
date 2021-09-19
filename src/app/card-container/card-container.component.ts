import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardType } from '../enums/card-type.enum';
import { NewCardModel } from '../models/new-card.model';

@Component({
  selector: 'card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {

  @Input() cardType: CardType = CardType.BOM;
  @Input() label: string = '';
  @Output() newItemEvent = new EventEmitter<NewCardModel>();
  public items: string[] = [];

  constructor() { }

  public addItem(newItem: string): void {
    const newCardData: NewCardModel = {
      textContent: newItem,
      cardType: this.cardType
    }; 
    this.newItemEvent.emit(newCardData);
  }

}
