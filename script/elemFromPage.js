const cardForm = document.querySelector('#form');
const cardInputs = document.querySelectorAll('.input');
const inputHolder = document.querySelector('.input__holder');
const inputCode = document.querySelector('.input__number');
const inputExpiry = document.querySelector('.input__date');
const inputCvv = document.querySelector('.input__cvv');
const cardHolder = document.querySelector('.card__name');
const cardExpiry = document.querySelector('.card__date');
const cardNumber = document.querySelector('.card__number');
const btnCheckOut = document.querySelector('.form__button');

export default {
  cardForm,
  cardInputs,
  inputHolder,
  inputCode,
  inputExpiry,
  inputCvv,
  cardHolder,
  cardExpiry,
  cardNumber,
  btnCheckOut,
};
