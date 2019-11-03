const searchTagByLabelAndPerformClickAction = async (tag, label) => {
  const options = await page.$$(tag);

  for (const option of options) {
    element = await page.evaluate(
      (el, label) => {
        if (String(el.innerText).trim() === label) {
          el.click();
        }
      },
      option,
      label
    );
  }
};

module.exports = {
  searchTagByLabelAndPerformClickAction,
};
