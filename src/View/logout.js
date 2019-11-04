const {logoutSelector,} = require('../utils/selector');
const { searchTagByLabelAndPerformClickAction } = require('../utils/common');

const logOut = async () => {
// Click on the Home button
await searchTagByLabelAndPerformClickAction('a', 'Home');
await page.waitForNavigation();
// Click on the logout Button
const logoutbtn = await page.$(logoutSelector.logoutButton);
await logoutbtn.click();
};

module.exports = { 
  logOut,
};