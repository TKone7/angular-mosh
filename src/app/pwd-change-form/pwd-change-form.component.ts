import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordValidators } from './password.validators';


@Component({
  selector: 'pwd-change-form',
  templateUrl: './pwd-change-form.component.html',
  styleUrls: ['./pwd-change-form.component.css']
})
export class PwdChangeFormComponent  {

  form: FormGroup;
  
  get oldPwd():AbstractControl{
    return this.form.get('oldPwd');
  }
  get newPwd():AbstractControl{
    return this.form.get('newPwd');
  }
  get newPwdRep():AbstractControl{
    return this.form.get('newPwdRep');
  }
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPwd: [null, Validators.required, PasswordValidators.invalidOldPwd],
      newPwd: [null, Validators.required],
      newPwdRep: [null, Validators.required]
       
    },{ validators: PasswordValidators.newPwdEqual });
   }

}
