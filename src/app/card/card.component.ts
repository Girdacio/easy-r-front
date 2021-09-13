import { Component, Input } from '@angular/core';
import { CardType } from '../enums/card-type.enum';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardType: CardType = CardType.BOM;
  @Input() text: string = '';

  constructor() { }

  public isTypeBom(): boolean {
    return this.cardType == CardType.BOM;
  }

  public isTypeRuim(): boolean {
    return this.cardType == CardType.RUIM;
  }

  public isTypeAcao(): boolean {
    return this.cardType == CardType.ACAO;
  }
}
