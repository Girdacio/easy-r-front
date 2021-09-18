import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { customLengthValidator } from '../shared/directives/custom-length-validator.directive';

@Component({
  selector: 'main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {

  public mainForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.mainForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      retroID: new FormControl('', [customLengthValidator(4)])
    })
  }
}
