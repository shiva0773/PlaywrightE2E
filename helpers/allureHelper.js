const { allure } = require('allure-playwright');

async function attachScreenshot(page, name = 'Failure Screenshot') {
  if (!page) return;
  const buffer = await page.screenshot();
  allure.attach(name, {
    contentType: 'image/png',
    body: buffer
  });
}

module.exports = { attachScreenshot };
