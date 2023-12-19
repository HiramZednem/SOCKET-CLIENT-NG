import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  
  texto: string = '';

  constructor( public chatService: ChatService ) { }

  enviar() {
    this.texto = this.texto.trim()
    if ( this.texto === '' ) return;

    console.log(this.texto);
    this.chatService.sendMessage( this.texto );
    this.texto = '';
  }



}
