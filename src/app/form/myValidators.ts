import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class AsyncValidator {
  static checkEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'test@test.test') {
          resolve({
            checkEmail: true,
          });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
