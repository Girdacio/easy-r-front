import { CardType } from "../enums/card-type.enum";

export interface CardModel {
    retroId: string;
    textContent: string;
    cardType: CardType; 
}