const { loginSelectors } = require('../utils/selector');
// Login with default username & Password

// Enter username and password for the User
const userLogin = async () => {
  await page.goto(`${process.env.TEST_URL}`);
  await page.type(loginSelectors.email, process.env.TEST_USERNAME);
  await page.type(loginSelectors.password,process.env.TEST_PASSWORD);
  // Click the login Button
  await page.click(loginSelectors.button);
};

module.exports = {
  userLogin,
};