import { Component, Input } from "@angular/core";
import { FormControl } from '@angular/forms';
import { InputInterface, InputType } from "../../interfaces/input.interface";

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html'
})
export class InputComponent implements InputInterface {
  @Input() control: FormControl = new FormControl();

  @Input() placeholder: string | undefined;

  @Input() type: InputType = 'text';

  icon: string | undefined;
}
