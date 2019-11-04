  const {quoteSelector,} = require('../utils/selector');
  // const { searchTagByLabelAndPerformClickAction } = require('../utils/common');

  const addquote= async () => {
    // Click on choose One dropdown
  const chooseOne = await page.$(quoteSelector.chooseOne);
  await chooseOne.click();
  // Select the option from thr drop Dowm
  await page.select(quoteSelector.dropDown, 'quote_auto.jsf');
  await page.waitForNavigation();
  await page.type(quoteSelector.zipCode, 2148);
  await page.type(quoteSelector.email, 'abc@gmail.com');
  await page.radio(quoteSelector.radioCar, 'CAR');
  const nextButton = await page.$(quoteSelector.nextBtn);
  await nextButton.click();
  await page.waitForNavigation();
  await page.type(quoteSelector.age, 21);
  await page.radio(quoteSelector.gender, 'Male');
  await page.select(quoteSelector.recordbtn, 'Excellent');
  const nextButton = await page.$(quoteSelector.nextBtn);
  await nextButton.click();
  await page.waitForNavigation();
  await page.type(quoteSelector.year, '2018');
  await page.type(quoteSelector.make, 'BUICK');
  await page.keyboard.press('Enter');
  await page.type(quoteSelector.make, 'CENTURY');
  await page.keyboard.press('Enter');
  await page.radio(quoteSelector.financialInforbtn, 'Own');
  const nextButton = await page.$(quoteSelector.nextBtn);
  await nextButton.click();
  await page.waitForNavigation();
  const purchase = await page.$(quoteSelector.purchaseBtn);
  await purchase.click();
  await page.waitForNavigation();
  await page.type(quoteSelector.crCardNumber, '1294 4863 2356 3975');
  await page.type(quoteSelector.expDate, '02/24');
  const btn = await page.$(quoteSelector.btn);
  await btn.click();
};
  
  
  module.exports = { 
    addquote,
  };
  