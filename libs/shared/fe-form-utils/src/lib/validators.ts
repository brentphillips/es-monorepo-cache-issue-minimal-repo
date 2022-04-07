import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { coerceNumberProperty } from '@angular/cdk/coercion';

/**
 * EsValidators is a class of static validator methods which can be used in Reactive Forms. These methods have been designed in a way that
 *  provides a dev experience that is consistent with the methods found in "Validator" (@angular/forms).
 * */
export class EsValidators {
  /** Checks if value is a valid email */
  static email(control: AbstractControl): ValidationErrors | null {
    const emailRegex = new RegExp(/^\S+@\S+\.\S+$/);

    if (!emailRegex.test(control.value)) {
      return { email: true };
    }

    return null;
  }

  /** Checks if value has the provided minimum amount of numbers */
  static minNumbers(min: number): ValidatorFn {
    const _min = coerceNumberProperty(min);

    const numbersCount = (value: string) => {
      return typeof value === 'number' ? Math.floor(value).toString().length : value.replace(/[^0-9]/g, '').length;
    };

    return (control: AbstractControl): ValidationErrors | null => {
      if ((control.value || control.value === 0) && _min > numbersCount(control.value)) {
        return { minNumbers: { min: _min, actual: numbersCount(control.value) } };
      }
      return null;
    };
  }

  /** Checks if value has the provided minimum amount of special characters */
  static minSpecialChars(min: number): ValidatorFn {
    const _min = coerceNumberProperty(min);

    const specialCharsCount = (value: string | number) => {
      if (typeof value === 'number') {
        const _value = value.toString();
        const nonSpecialCharsCount = _value.replace(/[^A-Za-z0-9]/g, '').length;
        return _value.length - nonSpecialCharsCount;
      }

      const nonSpecialCharsCount = value.replace(/[^A-Za-z0-9]/g, '').length;
      return value.length - nonSpecialCharsCount;
    };

    return (control: AbstractControl): ValidationErrors | null => {
      if ((control.value || control.value === 0) && _min > specialCharsCount(control.value)) {
        return { minSpecialChars: { min: _min, actual: specialCharsCount(control.value) } };
      }
      return null;
    };
  }

  /** Checks if value has the provided minimum amount of uppercase characters */
  static minUpperCaseChars(min: number): ValidatorFn {
    const _min = coerceNumberProperty(min);

    const upperCaseCount = (value: string | number) => {
      return typeof value === 'number' ? 0 : value.replace(/[^A-Z]/g, '').length;
    };

    return (control: AbstractControl): ValidationErrors | null => {
      if ((control.value || control.value === 0) && _min > upperCaseCount(control.value)) {
        return { minUpperCaseChars: { min: _min, actual: upperCaseCount(control.value) } };
      }
      return null;
    };
  }
}
