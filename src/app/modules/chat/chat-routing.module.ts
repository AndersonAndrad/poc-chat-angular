import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChatPage } from "./pages/chat/chat.component";

const routes: Routes = [{path: '', component: ChatPage}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRountingModule {}
