import { Injectable } from "@angular/core";
import { faker } from "@faker-js/faker";
import { Observable, Subject } from "rxjs";
import { Conversation, Message, Participant } from "../../../common/interfaces/chat.interface";

@Injectable({providedIn: 'root'})
export class ChatService {
  myParticipant: Participant = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
  }

  conversation: Subject<Conversation> = new Subject<Conversation>();

  conversation$: Observable<Conversation> = this.conversation.asObservable();

  sendMessage: Subject<Message> = new Subject<Message>();

  sendMessage$: Observable<Message> = this.sendMessage.asObservable();
}
