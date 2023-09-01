import validateCardHolder from './validateCardHolder.js';

describe('Валидация Card Holder', () => {
  it('Проверка на одно слово', () => {
    expect(validateCardHolder('Anton')).toBe(false);
  });

  it('Проверка на два слова латиницы', () => {
    expect(validateCardHolder('Anton Ivanov')).toBe(true);
  });

  it('Проверка на больше двух слов', () => {
    expect(validateCardHolder('Anton Ivanov Ivanovich')).toBe(false);
  });

  it('Проверка на два слова кирилицы', () => {
    expect(validateCardHolder('Антон Иванов')).toBe(false);
  });

  it('Проверка на содержание латиницы и цифр', () => {
    expect(validateCardHolder('Hello 41')).toBe(false);
  });

  it('Проверка на содержание цифр', () => {
    expect(validateCardHolder('177 41')).toBe(false);
  });
});



