const { userLogin } = require('../view/login');
const {addquote } = require('../view/addQuote');
const { contactForm } = require('../view/contactUs')


describe('Insaurance Co', () => {
  beforeAll(async () => {
    await page.goto(`${process.env.TEST_URL}`);
  });

it(
  'should display the sign in page',
  async () => {
    const title = await page.title();
    expect(title).toBe('InsuranceWeb: Home');
  });

  it(
    'should sign in the user',
    async () => {
      //Test
    await userLogin();
    //Assertion User have signed in.
    await expect(page).toMatch('John Smith');
    });

  it(
    'Should test to add Quote',
    async () => {
      // test
      await addquote();
      await expect(page).toMatch('Congratulations');
    });
  it(
    'should test for contact-us',
    async () => {
      // Test
      await contactForm();
      await page.waitForSelector(contactUsSelector.detailBtn);
    }
  );
