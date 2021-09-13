import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent {

  @Input() label: string = '';
  @Output() newItemEvent = new EventEmitter<string>();
  public formCardInput: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formCardInput = this.createForm();
  }

  createForm(): FormGroup {
    return this.formCardInput = this.formBuilder.group({
      cardInput: ['']
    })
  }

  onSubmit() {
    let cardText = this.cardInput;
    if (cardText) {
      this.newItemEvent.emit(cardText);
      this.clearInput();
    }
  }

  private clearInput(): void {
    this.cardInput = '';
  }

  private get cardInput(): string {
    return this.formCardInput.get('cardInput')?.value;
  }

  private set cardInput(newValue: string) {
    this.formCardInput.get('cardInput')?.setValue(newValue);
  }

}
