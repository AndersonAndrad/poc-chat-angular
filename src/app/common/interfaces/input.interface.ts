import { FormControl } from '@angular/forms';

export type InputType = 'text' | 'password' | 'email' | 'number' | 'url' | 'tel' | 'search' | 'date' | 'datetime-local' | 'month' | 'week' | 'time' | 'color';

export interface InputInterface {
  control: FormControl;

  placeholder: string | undefined;

  type: InputType;

  icon: string | undefined;
};
