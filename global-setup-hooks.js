// global-setup-hooks.js
const { attachScreenshot } = require('./helpers/allureHelper');

function registerFailureScreenshot(test) {
  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus && page) {
      const screenshot = await page.screenshot();
      await testInfo.attach('Failure Screenshot', {
        body: screenshot,
        contentType: 'image/png'
      });
    }
  });
}

module.exports = {  }; // ✅ Important!
