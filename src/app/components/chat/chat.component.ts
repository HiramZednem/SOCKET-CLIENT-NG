import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  
  texto: string = '';
  mensajesSubscription: Subscription | null = null;
  elemento: any;

  mensajes: any[] = [];

  constructor( public chatService: ChatService ) { }
 

  ngOnInit() {
    this.elemento = document.getElementById('chat-mensajes');

    this.mensajesSubscription = this.chatService.wsService.listen('mensaje-nuevo').subscribe( msg => {
     
      this.mensajes.push(msg)
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);

    });

  }

  ngOnDestroy(): void {

    this.mensajesSubscription!.unsubscribe;

  }

  enviar() {
    this.texto = this.texto.trim()
    if ( this.texto === '' ) return;

    console.log(this.texto);
    this.chatService.sendMessage( this.texto );
    this.texto = '';
  }



}
