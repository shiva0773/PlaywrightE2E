const { exec } = require('child_process');
const path = require('path');

async function globalTeardown() {
  try {
    const allureGenerateCmd = 'npx allure-commandline generate allure-results --clean -o allure-report';
    const allureOpenCmd = 'npx allure-commandline open allure-report';

    console.log('📊 Generating Allure Report...');
    await new Promise((resolve, reject) => {
      exec(allureGenerateCmd, { shell: true }, (error, stdout, stderr) => {
        if (error) {
          console.error(`❌ Allure generate failed:\n${stderr}`);
          reject(error);
        } else {
          console.log(stdout);
          resolve();
        }
      });
    });

    console.log('🚀 Opening Allure Report...');
    await new Promise((resolve, reject) => {
      exec(allureOpenCmd, { shell: true }, (error, stdout, stderr) => {
        if (error) {
          console.error(`❌ Allure open failed:\n${stderr}`);
          reject(error);
        } else {
          console.log(stdout);
          resolve();
        }
      });
    });

  } catch (err) {
    console.error(`❌ Failed to generate/open Allure report: ${err.message}`);
  }
}

module.exports = globalTeardown;
