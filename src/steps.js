const login = async (email, password) => {
  // click Sign In button
  await page.evaluate(() => {
    document.querySelector('.nav-action-button').click();
  });
  await page.waitForNavigation();

  // input email and click 'Continue' button
  await page.type('#ap_email', email);
  await page.click('#continue');
  await page.waitForNavigation();

  // input password and click 'Sign in' button
  await page.type('#ap_password', password);
  await page.click('#signInSubmit');
  await page.waitForNavigation();
};

const gotoCategory = async (category, subCategory) => {
  // click Departments link
  await page.click('#departments');
  // wait for category list
  await page.waitFor('.siteDir-container');

  await page.evaluate((cat, subCat) => {
    // scroll to bottom to load all categories
    window.pageContext.scrollToBottom();

    // expand category
    const categoryNode = window.pageContext.querySelectorWithText({ selector: 'a.a-expander-header', text: cat });
    categoryNode.click();

    // click sub category
    const subCategoryNode = window.pageContext.querySelectorWithText({ element: categoryNode.nextSibling, selector: 'a', text: subCat });
    subCategoryNode.click();
  }, category, subCategory);

  //   await page.waitForNavigation();
};

export { login, gotoCategory };
