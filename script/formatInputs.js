import elemFromPage from './elemFromPage.js';

const {
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
} = elemFromPage;

const btnLock = (regEx, input) => {
  if (regEx.test(input.value) || input.value === '') {
    btnCheckOut.disabled = false;
    btnCheckOut.style.opacity = '1';
  } else {
    btnCheckOut.setAttribute('disabled', 'true');
    btnCheckOut.style.opacity = '.5';
  }
};

const formatHolder = () => {
  inputHolder.value =
    inputHolder.value.replace(/[^A-Z\s]/i, '').substring(0, 21);
  cardHolder.textContent =
    inputHolder.value.replace(/./g, (str) => str.toUpperCase());
  const regexUserName = /^([A-Z]+)\s([A-Z]+)$/i;
  btnLock(regexUserName, inputHolder);
};

const formatCardCode = () => {
  const cardCode = inputCode.value.replace(/[^\d]/g, '').substring(0, 16);
  const regexNumber = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  inputCode.value = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
  cardNumber.textContent = inputCode.value;
  btnLock(regexNumber, inputCode);
};

const formatExpiry = () => {
  const expiry = inputExpiry.value.replace(/[^\d]/g, '').substring(0, 4);
  const regexExpiry = /^(0[1-9]|1[0-2])\/(2[3-9])$/;
  inputExpiry.value = expiry !== '' ? expiry.match(/.{1,2}/g).join('/') : '';
  cardExpiry.textContent = inputExpiry.value;
  btnLock(regexExpiry, inputExpiry);
};

const formatCvv = () => {
  const cvv = inputCvv.value.replace(/[^\d]/g, '').substring(0, 3);
  const regexCvv = /^\d{3}$/;
  inputCvv.value = cvv !== '' ? cvv.match(/.{1,3}/g) : '';
  btnLock(regexCvv, inputCvv);
};

const btnActions = () => {
  console.log('CardForm submit');
  const resault = confirm('CardForm submit');
  if (resault === false) {
    cardForm.reset();
  } else {
    btnCheckOut.setAttribute('disabled', '');
    cardInputs.forEach(input => {
      input.setAttribute('disabled', '');
    });
  }
};

export default {
  formatHolder,
  formatCardCode,
  formatExpiry,
  formatCvv,
  btnActions,
};
