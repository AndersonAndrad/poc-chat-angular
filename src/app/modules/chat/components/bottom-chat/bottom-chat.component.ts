import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Message } from "../../../../common/interfaces/chat.interface";
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'bottom-chat',
  templateUrl: './bottom-chat.component.html'
})
export class BottomChatComponent {
  @Input() conversationKey: string | undefined = '';

  messageControl: FormControl = new FormControl();

  constructor(private readonly chatService: ChatService){}

  sendMessage(): void {
    if(!this.conversationKey) return;

    const {myParticipant} = this.chatService

    const message: Message = {
      author: myParticipant,
      conversationKey: this.conversationKey,
      date: new Date(),
      payload: this.messageControl.value,
      statusMessage: 'send'
    }

    this.chatService.sendMessage.next(message);

    this.messageControl.reset();
  }
}
