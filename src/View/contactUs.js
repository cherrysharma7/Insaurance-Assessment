const {contactUsSelector,} = require('../utils/selector');
const { searchTagByLabelAndPerformClickAction } = require('../utils/common');

const contactForm= async () => {
  // Click on choose One dropdown
const btn = await page.$(contactUsSelector.detailBtn);
await btn.click();
await page.waitForNavigation();
// Click on the Contact Us button
await searchTagByLabelAndPerformClickAction('a', 'Contact Us');
await page.waitForNavigation();
// Filling up the form
await page.type(contactUsSelector.nameBox, 'John');
await page.type(contactUsSelector.lastName, 'Smith');
await page.type(contactUsSelector.address, 'Buckley Avenue');
await page.type(contactUsSelector.city, 'Sydney');
await page.type(contactUsSelector.state, 'NSW');
await page.type(contactUsSelector.zip, 2148);
await page.type(contactUsSelector.telephone, 872687452845);
await page.type(contactUsSelector.email, 'abc@gmail.com');
await page.type(contactUsSelector.commentBox, 'contact me');
// Submit the form
await searchTagByLabelAndPerformClickAction('a', 'Submit');
await page.waitForNavigation();
};


module.exports = { 
  contactForm,
};