import elemFromPage from './elemFromPage.js';
import control from './formatInputs.js';

const {
  cardForm,
  inputHolder,
  inputCode,
  inputExpiry,
  inputCvv,
} = elemFromPage;

const {
  formatHolder,
  formatCardCode,
  formatExpiry,
  formatCvv,
  btnActions,
} = control;

cardForm.addEventListener('input', e => {
  e.preventDefault();
  const target = e.target;
  if (target === inputHolder) formatHolder();
  if (target === inputCode) formatCardCode();
  if (target === inputExpiry) formatExpiry();
  if (target === inputCvv) formatCvv();
});

cardForm.addEventListener('submit', e => {
  e.preventDefault();
  btnActions();
});
