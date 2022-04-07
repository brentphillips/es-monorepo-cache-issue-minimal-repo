import { FormControl } from '@angular/forms';
import { EsValidators } from './validators';

describe('EsValidators', () => {
  describe('minNumbers', () => {
    it('should NOT error on an empty string', () => {
      expect(EsValidators.minNumbers(2)(new FormControl(''))).toBeNull();
    });

    it('should NOT error on null', () => {
      expect(EsValidators.minNumbers(2)(new FormControl(null))).toBeNull();
    });

    it('should NOT error on undefined', () => {
      expect(EsValidators.minNumbers(2)(new FormControl(undefined))).toBeNull();
    });

    it('should error if value is the number 0', () => {
      expect(EsValidators.minNumbers(2)(new FormControl(0))).toEqual({ minNumbers: { min: 2, actual: 1 } });
    });

    it('should error on small values', () => {
      expect(EsValidators.minNumbers(2)(new FormControl('1test'))).toEqual({ minNumbers: { min: 2, actual: 1 } });
    });

    it('should error on small values converted from number', () => {
      expect(EsValidators.minNumbers(3)(new FormControl(46))).toEqual({ minNumbers: { min: 3, actual: 2 } });
    });

    it('should NOT error on equal values', () => {
      expect(EsValidators.minNumbers(3)(new FormControl('test4test67test'))).toEqual(null);
    });

    it('should NOT error on equal values converted from number', () => {
      expect(EsValidators.minNumbers(3)(new FormControl(464))).toEqual(null);
    });

    it('should NOT error on big values', () => {
      expect(EsValidators.minNumbers(3)(new FormControl('test4test67test8'))).toEqual(null);
    });

    it('should NOT error on big values converted from number', () => {
      expect(EsValidators.minNumbers(3)(new FormControl(4648))).toEqual(null);
    });

    it('should NOT error as expected when min value is a string', () => {
      expect(EsValidators.minNumbers('2' as any)(new FormControl(46))).toEqual(null);
    });

    it('should error as expected when min value is a string', () => {
      expect(EsValidators.minNumbers('3' as any)(new FormControl(46))).toEqual({ minNumbers: { min: 3, actual: 2 } });
    });
  });

  describe('minSpecialChars', () => {
    it('should NOT error on an empty string', () => {
      expect(EsValidators.minSpecialChars(2)(new FormControl(''))).toBeNull();
    });

    it('should NOT error on null', () => {
      expect(EsValidators.minSpecialChars(2)(new FormControl(null))).toBeNull();
    });

    it('should NOT error on undefined', () => {
      expect(EsValidators.minSpecialChars(2)(new FormControl(undefined))).toBeNull();
    });

    it('should error if value is a number', () => {
      expect(EsValidators.minSpecialChars(2)(new FormControl(123))).toEqual({
        minSpecialChars: { min: 2, actual: 0 },
      });
    });

    it('should error if value is the number 0', () => {
      expect(EsValidators.minSpecialChars(2)(new FormControl(0))).toEqual({ minSpecialChars: { min: 2, actual: 0 } });
    });

    it('should error on small values', () => {
      expect(EsValidators.minSpecialChars(2)(new FormControl('%test'))).toEqual({
        minSpecialChars: { min: 2, actual: 1 },
      });
    });

    it('should NOT error on equal values', () => {
      expect(EsValidators.minSpecialChars(3)(new FormControl('test#test)%test'))).toEqual(null);
    });

    it('should NOT error on big values', () => {
      expect(EsValidators.minSpecialChars(3)(new FormControl('test!test)&test^'))).toEqual(null);
    });

    it('should NOT error as expected when min value is a string', () => {
      expect(EsValidators.minSpecialChars('2' as any)(new FormControl('$('))).toEqual(null);
    });

    it('should error as expected when min value is a string', () => {
      expect(EsValidators.minSpecialChars('3' as any)(new FormControl('#('))).toEqual({
        minSpecialChars: { min: 3, actual: 2 },
      });
    });
  });

  describe('minUpperCaseChars', () => {
    it('should NOT error on an empty string', () => {
      expect(EsValidators.minUpperCaseChars(2)(new FormControl(''))).toBeNull();
    });

    it('should NOT error on null', () => {
      expect(EsValidators.minUpperCaseChars(2)(new FormControl(null))).toBeNull();
    });

    it('should NOT error on undefined', () => {
      expect(EsValidators.minUpperCaseChars(2)(new FormControl(undefined))).toBeNull();
    });

    it('should error if value is a number', () => {
      expect(EsValidators.minUpperCaseChars(2)(new FormControl(123))).toEqual({
        minUpperCaseChars: { min: 2, actual: 0 },
      });
    });

    it('should error if value is the number 0', () => {
      expect(EsValidators.minUpperCaseChars(2)(new FormControl(0))).toEqual({
        minUpperCaseChars: { min: 2, actual: 0 },
      });
    });

    it('should error on small values', () => {
      expect(EsValidators.minUpperCaseChars(2)(new FormControl('Gtest'))).toEqual({
        minUpperCaseChars: { min: 2, actual: 1 },
      });
    });

    it('should NOT error on equal values', () => {
      expect(EsValidators.minUpperCaseChars(3)(new FormControl('testAtestBCtest'))).toEqual(null);
    });

    it('should NOT error on big values', () => {
      expect(EsValidators.minUpperCaseChars(3)(new FormControl('testAtestBCtestD'))).toEqual(null);
    });

    it('should NOT error as expected when min value is a string', () => {
      expect(EsValidators.minUpperCaseChars('2' as any)(new FormControl('AB'))).toEqual(null);
    });

    it('should error as expected when min value is a string', () => {
      expect(EsValidators.minUpperCaseChars('3' as any)(new FormControl('AB'))).toEqual({
        minUpperCaseChars: { min: 3, actual: 2 },
      });
    });
  });
});
