import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  noManco(control: FormControl) {
    if (control.value?.toLowerCase() === 'manco') {
      return {
        noManco: true,
      };
    }

    return null;
  }
}
