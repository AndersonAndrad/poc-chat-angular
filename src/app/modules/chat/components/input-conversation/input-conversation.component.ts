import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { InputInterface, InputType } from "../../../../common/interfaces/input.interface";

@Component({
  selector: 'input-conversation',
  templateUrl: './input-conversation.component.html'
})
export class InputConversationComponent implements InputInterface {
  @Input() control: FormControl<any> = new FormControl();

  @Input() placeholder: string | undefined = ''

  @Input() type: InputType = 'text'

  @Input() icon: string | undefined;
}
