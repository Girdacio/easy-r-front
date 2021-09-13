import { Component, Input } from '@angular/core';
import { CardType } from '../enums/card-type.enum';

@Component({
  selector: 'card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {

  @Input() cardType: CardType = CardType.BOM;
  @Input() label: string = '';
  public items: string[] = [];

  constructor() { }

  public addItem(newItem: string): void {
    this.items.push(newItem);
    console.log(this.cardType)
  }

}
