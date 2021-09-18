import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function customLengthValidator(minLength: number, maxLength: number = minLength): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = control.value == undefined || 
        control.value.length < minLength ||
        control.value.length > maxLength;
      return forbidden ? {invalid: {value: "Tamanho inválido"}} : null;
    };
  }