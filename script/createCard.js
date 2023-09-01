import {el, setChildren} from '../node_modules/redom/dist/redom.es.js';

const goodsListPage = () => {
  const creditCard = el('div', {className: 'credit-card'}, [
    el('span', {className: 'card__number'}, 'xxxx xxxx xxxx xxxx'),
    el('div', {className: 'card__personal'}, [
      el('span', {className: 'card__name'}, 'John Dou'),
      el('span', {className: 'card__date'}, '04/24'),
    ]),
  ]);
  const form = el('form', {action: '#', className: 'form', id: 'form'}, [
    el('div', {className: 'form__input-wrap form__input-wrap_holder'}, [
      el('label', {for: '', className: 'form__label form__holder-label'},
        'Card Holder'),
      el('input', {type: 'text', className: 'input input__holder',
        required: 'true'}),
    ]),
    el('div', {className: 'form__input-wrap form__input-wrap_number'}, [
      el('label', {for: '', className: 'form__label form__number-label'},
        'Card Number'),
      el('input', {className: 'input input__number', id: 'cardNumber',
        required: 'true'}),
    ]),
    el('div', {className: 'form__input-wrap form__input-wrap_date'}, [
      el('label', {for: '', className: 'form__label form__date-label'},
        'Card Expiry'),
      el('input', {type: 'text', className: 'input input__date',
        required: 'true'}),
    ]),
    el('div', {className: 'form__input-wrap form__input-wrap_cvv'}, [
      el('label', {for: '', className: 'form__label form__cvv-label'},
        'CVV'),
      el('input', {type: 'text', className: 'input input__cvv',
        required: 'true'}),
    ]),
    el('button', {className: 'form__button'}, 'CHECK OUT'),
    // el('button', {className: 'form__button'}, 'CHECK OUT'),
  ]);
  const card = el('div', {className: 'card'},
    [el('p', {className: 'secure'}, 'Secure Checkout'),
      el('h2', {disabled: true, className: 'validate'}, 'Valid data'),
      creditCard, form]);

  return el('div', {className: 'wrapper'}, card);
};
setChildren(document.body, goodsListPage());

