import validateCardNumber from './validateCardNumber.js';

describe('Валидация Card Number', () => {
  it('Проверка на символы кириллицы,', () => {
    expect(validateCardNumber('ываы вацук цукц уккы')).toBe(false);
  });

  it('Проверка на символы латиницы', () => {
    expect(validateCardNumber('dfdf dfdfd dfdfe rerde')).toBe(false);
  });

  it('Проверка на знаки препинания', () => {
    expect(validateCardNumber('....,,,,::::????')).toBe(false);
  });

  it('Проверка на  количество цифр меньше 16', () => {
    expect(validateCardNumber(538155001011346)).toBe(false);
  });

  it('Проверка на  количество цифр больше 16', () => {
    expect(validateCardNumber(538155001011346941)).toBe(false);
  });

  it('Проверка на  количество цифр равное 16', () => {
    expect(validateCardNumber(5381550010113469)).toBe(true);
  });
});