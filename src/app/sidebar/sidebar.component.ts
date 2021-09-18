import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private socket: Socket) {
    this.socket.connect();
    this.socket.on("session", (sessionID: string, userID: string) => {
      // attach the session ID to the next reconnection attempts
      // this.socket.auth = { sessionID };
      // store it in the localStorage
      // localStorage.setItem("sessionID", sessionID);
      // save the ID of the user
      // this.socket.userID = userID;
      console.log('chegou aqui');
      console.log(`session: ${sessionID} - user: ${userID}`);
    });
  }

}
