const { By, until } = require('selenium-webdriver');
const { Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');
const assert = require('assert');

(async function example() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://ectest.trueautomation.io/flow');

        await driver.wait(until.elementLocated(By.id(ta("username","username")))).sendKeys('admin');
        await driver.findElement(By.css(ta('pass', '#password'))).sendKeys('wrongPass');
        await driver.findElement(By.className(ta('enterBtn', 'ec-ok-btn'))).click();

        let actualError = await driver.wait(until.elementLocated(By.xpath(ta("error","//span[@class='ec-validation-popover__message']")))).getText();
        let expectedError = "Invalid user 'admin' or incorrect password";

        assert.equal(actualError, expectedError);

        console.log("Test completed successfully. Email or password not true");
    } finally {
        await driver.quit();
    }
})();