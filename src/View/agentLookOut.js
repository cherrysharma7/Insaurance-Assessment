const {quoteSelector,} = require('../utils/selector');


const agentLook = async () => {
  // Click on choose One dropdown
const chooseOne = await page.$(quoteSelector.chooseOne);
await chooseOne.click();
await page.select(quoteSelector.dropDown, 'agent_lookup.jsf');
await page.waitForNavigation();
await page.type(agentLookOutSelector.zipcode, '2148');
// Click the search Button
const searchBtn = await page.$(agentLookOutSelector.searchBtn);
await searchBtn.click();
};



module.exports = { 
  agentLook
};