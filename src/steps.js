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

export { login }