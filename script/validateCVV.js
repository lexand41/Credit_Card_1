const validateCVV  = (num) => {
  num = String(num);
  const cvv = num.replace(/[^\d]/g, '');
  const regexCvv = /^\d{3}$/;
  num = cvv !== '' ? cvv.match(/.{1,3}/g) : '';
  if (regexCvv.test(num)) return true;
  return false;
};

export default validateCVV;
