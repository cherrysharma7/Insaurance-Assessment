const loginSelectors = {
  email: 'input[name=login-form:email]',
  password: 'input[name=login-form:password]',
  button: 'button[name=login-form:login]',
};

const quoteSelector = {
  chooseOne: 'input[name=quick-link:jump-menu]',
  dropDown: 'select[name=quick-link:jump-menu]',
  zipCode: 'input[name=autoquote:zipcode]',
  email: 'input[name=autoquote:e-mail]',
  radioCar: 'input[type=radio]',
  nextBtn: '.cbutton',
  age: 'input[name=autoquote:age]',
  gender: 'input[type=radio]',
  recordbtn: 'input[type=radio]',
  year: 'input[name=autoquote:year]',
  make: 'input[name=makeCombo]',
  financialInforbtn: 'input[type=radio]',
  model: 'input[name=modelCombo]',
  purchaseBtn: 'input[name=quote-result:purchase-quote]',
  crCardNumber: 'input[name=purchaseQuote:cardnumber]',
  expDate: 'input[name=purchaseQuote:expiration]',
  btn: 'input[name=purchaseQuote:purchase]',
}

module.exports = { 
  loginSelectors,
  quoteSelector
};
