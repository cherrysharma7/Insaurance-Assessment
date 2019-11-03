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
};

const contactUsSelector = {
  detailBtn: 'input[name=logout-form:details]',
  titleBox: 'input[name=autoquote:f1]',
  nameBox: 'input[name=autoquote:f2]',
  lastName: 'input[name=autoquote:f3]',
  address: 'input[name=autoquote:f5]',
  city: 'input[name=autoquote:f7]',
  state: 'input[name=autoquote:f8]',
  zip: 'input[name=autoquote:f9]',
  telephone: 'input[name=autoquote:f10]',
  email: 'input[name=autoquote:f11]',
  commentBox: 'input[name=autoquote:f12]',
};

module.exports = { 
  loginSelectors,
  quoteSelector,
  contactUsSelector,
};
