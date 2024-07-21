import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { Conversation } from "../../../../common/interfaces/chat.interface";
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'chat-timeline',
  templateUrl: './chat-timeline.component.html'
})
export class ChatTimelineComponent implements OnInit, OnDestroy {
  @ViewChild('chatTimeline') private element: ElementRef | undefined;

  conversation: Conversation | undefined;

  private readonly subscription: Subscription = new Subscription();

  constructor(private readonly chatService: ChatService){}

  ngOnInit(): void {
    this.listenConversation();
    this.listenSendMessage();

    /**
     * @todo - check how implement scroll (I tested afterContentInit)
     */
    setTimeout(() => {this.scrollToBottom()}, 1000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private listenSendMessage(): void {
    this.subscription.add(this.chatService.sendMessage$.subscribe(message => {
      if(this.conversation?.conversationKey === message.conversationKey){
        this.scrollToBottom()
      }
    }))
  }

  private listenConversation(): void {
    this.subscription.add(this.chatService.conversation$.subscribe(conversation => {
      this.conversation = conversation;
    }))
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      if(!this.element) return;
      this.element.nativeElement.scrollTop = this.element.nativeElement.scrollHeight;
    }, 100)
  }
}
