import { Component, Input } from "@angular/core";
import { Message } from "../../../../common/interfaces/chat.interface";
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'balloon-chat',
  templateUrl: './balloon-message.component.html'
})
export class BalloonChatComponent {
  @Input() message: Message | undefined;

  constructor(private readonly chatService: ChatService){}

  get userMessage(): boolean {
    const {myParticipant} = this.chatService

    return myParticipant.name === this.message?.author?.name;
  }
}
