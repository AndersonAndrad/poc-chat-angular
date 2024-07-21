import { Component, Input } from "@angular/core";
import { Conversation } from "../../../../common/interfaces/chat.interface";
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'chat-conversation',
  templateUrl: './conversation.component.html'
})
export class ChatConversationComponent {
  @Input() conversation: Conversation | undefined;

  constructor(private readonly chatService: ChatService){}

  selectConversation(): void {
    if(!this.conversation) return;

    this.chatService.conversation.next(this.conversation);
  }

  get lastMessage(): string {
    /**
     * @todo - implement reverse
     */
    const messages = this.conversation?.messages ?? []
    return messages[messages.length - 1]?.payload ?? '';
  }
}
