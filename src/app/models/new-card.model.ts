import { CardType } from "../enums/card-type.enum";

export interface NewCardModel {
    textContent: string;
    cardType: CardType; 
}