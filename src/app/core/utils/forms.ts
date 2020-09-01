import { FormControl, Validators } from '@angular/forms';

export const defaultData = (value?: string | number) => {
  return new FormControl(value, Validators.required);
};
