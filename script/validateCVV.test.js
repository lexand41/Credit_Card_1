import validateCVV from './validateCVV.js';

describe('Валидация Card Number', () => {
  it('Проверка на символы кириллицы,', () => {
    expect(validateCVV('ыва')).toBe(false);
  });

  it('Проверка на символы латиницы', () => {
    expect(validateCVV('dfd')).toBe(false);
  });

  it('Проверка на знаки препинания', () => {
    expect(validateCVV('.,?')).toBe(false);
  });

  it('Проверка на  количество цифр меньше 3', () => {
    expect(validateCVV(53)).toBe(false);
  });

  it('Проверка на  количество цифр больше 3', () => {
    expect(validateCVV(6941)).toBe(false);
  });

  it('Проверка на  количество цифр равное 3', () => {
    expect(validateCVV(469)).toBe(true);
  });
});