const validateCardHolder = (str) => {
  const regexUserName = /^([A-Z]+)\s([A-Z]+)$/i;
  if (regexUserName.test(str)) return true;
  return false;
};

export default validateCardHolder;
