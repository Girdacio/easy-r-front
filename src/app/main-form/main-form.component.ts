import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { customLengthValidator } from '../shared/directives/custom-length-validator.directive';

@Component({
  selector: 'main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {

  public mainForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) {
      this.mainForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      retroID: new FormControl('', [customLengthValidator(4)])
    })
  }

  public novo(): void {
    console.log('novo@');
  }

  public entrar(): void {
    const retroID = this.mainForm.get('retroID')?.value;
    this.router.navigate(['/easy-r', { id: retroID, outro: 'abde' }]);
  }
}
