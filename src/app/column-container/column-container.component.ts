import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { CardType } from '../enums/card-type.enum';
import { CardModel } from '../models/card.model';
import { NewCardModel } from '../models/new-card.model';
import { SessionData } from '../models/session-data.model';
import { SocketOne } from '../services/socket-one.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'column-container',
  templateUrl: './column-container.component.html',
  styleUrls: ['./column-container.component.scss']  
})
export class ColumnContainerComponent implements OnDestroy {

  private socket: Socket | undefined;

  constructor(
    private route: ActivatedRoute,
    private storage: StorageService) {   
      this.configurarWebsocket();
  }  

  public get cardType(): typeof CardType {
    return CardType;
  }

  public addItem(newItem: NewCardModel): void {
    const newItemData: CardModel = {
      retroId: this.getRetroID(),
      textContent: newItem.textContent,
      cardType: newItem.cardType
    }
    this.socket?.emit('newItem', newItemData);
  }

  private configurarWebsocket(): void {
    this.socket = new SocketOne(this.buildSessionData());
    this.socket.connect();    

    this.socket.on('session', (session: SessionData) => {
      this.storage.salvarSessao(session);
    });

    this.socket.on('allItens', (item: any[]) => {
      console.log(item);
    });

    this.socket.on('newItem', (item: any) => {
      console.log(item);
    });

    this.socket.on("connect_error", (err: any) => {
      if (err.message === "NO_RETRO") {
        console.error('nao passou retro ID');
      }
    });
    
  }

  private buildSessionData() {
    const userId = this.storage.buscarSessao()?.userId;
    return {
      retroId : this.getRetroID(),
      userId : userId
    }
  }

  private getRetroID(): string {
    return this.route.snapshot.paramMap.get('id') || "";
  }

  ngOnDestroy(): void {    
    this.socket?.disconnect();
  }
}