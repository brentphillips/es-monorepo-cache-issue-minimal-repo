import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { hasError, hasValidator } from './validator-utils';

describe('hasError', () => {
  it('returns FALSE if field does not exist', () => {
    const formGroup = new FormGroup({ foo: new FormControl('', Validators.required) });

    formGroup.markAllAsTouched();

    const result = hasError({
      formGroup,
      fieldName: 'bar',
      validatorName: 'required',
    });
    expect(result).toBe(false);
  });

  it('returns FALSE if field has not been touched', () => {
    const result = hasError({
      formGroup: new FormGroup({ foo: new FormControl('', Validators.required) }),
      fieldName: 'foo',
      validatorName: 'required',
    });
    expect(result).toBe(false);
  });

  it('returns FALSE if validation error does not exist', () => {
    const formGroup = new FormGroup({ foo: new FormControl('', Validators.required) });

    formGroup.markAllAsTouched();

    const result = hasError({
      formGroup,
      fieldName: 'foo',
      validatorName: 'minLength',
    });
    expect(result).toBe(false);
  });

  it('returns TRUE if validation error exists', () => {
    const formGroup = new FormGroup({ foo: new FormControl('', Validators.required) });

    formGroup.markAllAsTouched();

    const result = hasError({
      formGroup,
      fieldName: 'foo',
      validatorName: 'required',
    });

    expect(result).toBe(true);
  });

  it('returns FALSE if validation error is addressed', () => {
    const formGroup = new FormGroup({ foo: new FormControl('', Validators.required) });

    formGroup.markAllAsTouched();

    let result = hasError({
      formGroup,
      fieldName: 'foo',
      validatorName: 'required',
    });

    expect(result).toBe(true);

    formGroup.setValue({ foo: 'value' });

    result = hasError({
      formGroup,
      fieldName: 'foo',
      validatorName: 'required',
    });

    expect(result).toBe(false);
  });
});

describe('hasValidator', () => {
  it('returns FALSE if control does not exist', () => {
    const formGroup = new FormGroup({ foo: new FormControl('', Validators.required) });

    formGroup.markAllAsTouched();

    const result = hasValidator({
      formGroup,
      fieldName: 'bar',
      validatorName: 'required',
    });
    expect(result).toBe(false);
  });

  it('returns FALSE if control does not have validators', () => {
    const formGroup = new FormGroup({ foo: new FormControl('') });

    formGroup.markAllAsTouched();

    const result = hasValidator({
      formGroup,
      fieldName: 'foo',
      validatorName: 'required',
    });
    expect(result).toBe(false);
  });

  it('returns FALSE if control does not have provided validator', () => {
    const formGroup = new FormGroup({ foo: new FormControl('', Validators.minLength(1)) });

    formGroup.markAllAsTouched();

    const result = hasValidator({
      formGroup,
      fieldName: 'foo',
      validatorName: 'required',
    });
    expect(result).toBe(false);
  });

  it('returns TRUE if control does have provided validator', () => {
    const formGroup = new FormGroup({ foo: new FormControl('', Validators.required) });

    formGroup.markAllAsTouched();

    const result = hasValidator({
      formGroup,
      fieldName: 'foo',
      validatorName: 'required',
    });
    expect(result).toBe(true);
  });

  it('returns FALSE if validator removed from control', () => {
    const formGroup = new FormGroup({ foo: new FormControl('', Validators.required) });

    formGroup.markAllAsTouched();

    let result = hasValidator({
      formGroup,
      fieldName: 'foo',
      validatorName: 'required',
    });
    expect(result).toBe(true);

    const control = formGroup.get('foo') as AbstractControl;
    control.clearValidators();

    result = hasValidator({
      formGroup,
      fieldName: 'foo',
      validatorName: 'required',
    });
    expect(result).toBe(false);
  });
});
