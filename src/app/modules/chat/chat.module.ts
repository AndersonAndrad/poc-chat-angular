import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { ChatRountingModule } from "./chat-routing.module";
import { BalloonChatComponent } from "./components/balloon-message/balloon-message.component";
import { BottomChatComponent } from "./components/bottom-chat/bottom-chat.component";
import { ChatTimelineComponent } from "./components/chat-timeline/chat-timeline.component";
import { ConversationListComponent } from "./components/conversation-list/conversation-list.component";
import { ChatConversationComponent } from "./components/conversation/conversation.component";
import { InputConversationComponent } from "./components/input-conversation/input-conversation.component";
import { ChatPage } from "./pages/chat/chat.component";

@NgModule({
  declarations: [ChatPage, ChatConversationComponent, ConversationListComponent, InputConversationComponent, ChatTimelineComponent, BalloonChatComponent, BottomChatComponent],
  imports: [CommonModule, ChatRountingModule, ReactiveFormsModule],
  exports: []
})
export class ChatModule {}
