const validateCardNumber  = (num) => {
  num = String(num);
  const cardCode = num.replace(/[^\d]/g, '');
  const regexNumber = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  num = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
  if (regexNumber.test(num)) return true;
  return false;
};

export default validateCardNumber;

