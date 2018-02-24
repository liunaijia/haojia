import puppeteer from 'puppeteer';
import devices from 'puppeteer/DeviceDescriptors';

import { register as registerPageContext } from './pageContext';
import { gotoCategory } from './steps';

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  try {
    const page = await browser.newPage();
    await page.emulate(devices['iPhone X']);
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));

    await registerPageContext(page);

    global.page = page;

    await page.goto('https://www.amazon.com/');

    await gotoCategory('Clothing, Shoes & Jewelry', 'Men');
  } catch (error) {
    console.error(error);
  } finally {
    // await browser.close();
  }
})();
