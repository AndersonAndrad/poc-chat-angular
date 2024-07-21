import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { faker } from '@faker-js/faker';
import { debounceTime, Subscription } from "rxjs";
import { Conversation, Message, Participant } from "../../../../common/interfaces/chat.interface";
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'conversation-list',
  templateUrl: './conversation-list.component.html'
})
export class ConversationListComponent implements OnInit, OnDestroy {
  private conversationsCache: Conversation[] = [];

  private conversationList: Conversation[] = [];

  private readonly subscription: Subscription = new Subscription();

  searchControl: FormControl = new FormControl();

  constructor(private readonly chatService: ChatService){ }

  ngOnInit(): void {
    this.initConversations();
    this.listenSearchControl();
    this.listenSendMessage();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private listenSendMessage(): void {
    this.subscription.add(this.chatService.sendMessage$.subscribe(message => {
      console.log({message})

      console.log(this.conversationsCache.map(conversation => conversation?.conversationKey))

      const conversation = this.conversationsCache.find(conversation => conversation.conversationKey === message.conversationKey);

      console.log(conversation)

      if(!conversation) return;

      console.log({conversation})

      conversation?.messages.push(message);
    }))
  }

  private listenSearchControl(): void {
    this.subscription.add(this.searchControl.valueChanges.pipe(debounceTime(750)).subscribe((str: string) => {
      str = str.replace(/\s+/g, ' ').trim();

      this.conversationList = this.conversationsCache;

      if(!str.length) return;

      const regex = new RegExp(str, 'i');

      this.conversationList = this.conversationsCache.filter(conversation => regex.test(conversation.title));
    }));
  }

  private makeConversation(): Conversation[] {
    const {myParticipant} = this.chatService;

    const conversations: Conversation[] = [];

    Array.from({length: 15}).forEach(() => {
      const conversationKey: string = faker.string.uuid();

      const otherParticipant: Participant = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
      }

      let messages: Message[] = [];

      let messageStatus: Message['statusMessage'][] = ["read", "received", "send"]

      Array.from({length: 15}).forEach(() => {
        messages.push({
          author: faker.datatype.boolean() ? myParticipant : otherParticipant,
          payload: faker.string.sample(),
          statusMessage: messageStatus[faker.number.int({min: 0, max: 2})],
          date: faker.date.anytime(),
          conversationKey,
        })
      });

      conversations.push({
        participants: [
          myParticipant,
          otherParticipant
        ],
        lastMessage: faker.date.anytime(),
        messages,
        title: otherParticipant.name,
        conversationKey,
      })
    })


    return conversations;
  }

  private initConversations(): void {
    this.conversationsCache = this.makeConversation();
    this.conversationList = this.conversationsCache
  }

  get conversationToList(): Conversation[] {
    return this.conversationList;
  }
}
