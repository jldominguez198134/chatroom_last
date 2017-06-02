import {Component, group, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../state-management/state/main.state";
import {MessagesService} from "../../../services/messages.service";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';

@Component({
  selector: 'app-chat-board',
  templateUrl: 'chat-board.component.html',
  styleUrls: ['chat-board.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateY(20px)', opacity: 0}),
        group([
          animate('0.3s ease-in-out', style({
            transform: 'translateY(0)'
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ])
    ])
  ]
})
export class ChatBoardComponent implements OnInit {

  messages: Array<any>;
  messagesList: Array<any>;
  cargado: boolean;

  constructor(private store: Store<State>, private messagesService: MessagesService) {
    this.messages = [];
    this.messagesList = [];
    this.cargado = false;
  }

  ngOnInit() {
    this.store.select('mainStoreReducer').subscribe((state) => {
      this.messagesList = state['messages'];
      if (this.messagesList.length !== 0) {
        this.messages.push(this.messagesList.pop());
      }
    });
  }

  animationStarted() {

  }
  animationDone() {
    this.cargado = true;

    if (this.messagesList.length !== 0) {
      this.messages.push(this.messagesList.pop());
    }
  }

}
