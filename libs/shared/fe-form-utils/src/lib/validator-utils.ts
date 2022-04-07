import { AbstractControl, FormGroup } from '@angular/forms';

/** Checks the provided formGroup to determine if the provided field has the provided validation error */
export function hasError({
  formGroup,
  fieldName,
  validatorName,
}: {
  formGroup: FormGroup;
  fieldName: string;
  validatorName: string;
}): boolean {
  const field = formGroup.get(fieldName);
  return !!field && field.touched && field.hasError(validatorName);
}

/** Checks the provided formGroup to determine if the provided field has the provided validator */
export function hasValidator({
  formGroup,
  fieldName,
  validatorName,
}: {
  formGroup: FormGroup;
  fieldName: string;
  validatorName: string;
}): boolean {
  const control = formGroup.get(fieldName);

  if (!control || !control.validator) {
    return false;
  }

  const validators = control.validator({} as AbstractControl);

  return !!(validators && validators[validatorName]);
}
