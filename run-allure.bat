@echo off
npx allure-commandline generate allure-results --clean -o allure-report
npx allure-commandline open allure-report
