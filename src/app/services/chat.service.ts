import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) { }

    sendMessage( mensaje: string ) {
      const payload = {
        de: 'Hiram',
        cuerpo: mensaje
      };

      this.wsService.emit( 'mensaje', payload );

    }

    getMessages( evento: string ) {

      return this.wsService.listen( evento );
    }

}
