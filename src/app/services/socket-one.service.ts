import { Socket } from "ngx-socket-io";

export class SocketOne extends Socket {
  constructor(queryValues: any) {
    super({ url: 'http://localhost:3000', options: {autoConnect : false, query : queryValues} });
  }
}