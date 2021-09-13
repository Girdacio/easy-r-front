import { Component } from '@angular/core';
import { CardType } from '../enums/card-type.enum';

@Component({
  selector: 'column-container',
  templateUrl: './column-container.component.html',
  styleUrls: ['./column-container.component.scss']
})
export class ColumnContainerComponent {

  constructor() { }

  public get cardType(): typeof CardType {
    return CardType;
  }

}
