import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import { resolve } from 'url';

export class PasswordValidators {
    static invalidOldPwd(control: AbstractControl): Promise<ValidationErrors|null>{
        return new Promise((resolve, reject) => {
            if(control.value != "1234"){
                return resolve({invalidOldPwd: true});
            }
        });
        return null;
    }
    static newPwdEqual(gr: FormGroup): ValidationErrors | null {
        if (gr.get('newPwd') && gr.get('newPwdRep')){
            if (gr.get('newPwd').value !== gr.get('newPwdRep').value){
                return { newPwdEqual: true };
            }
        }
        return null;
    }
}

