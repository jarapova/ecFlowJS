const { By, until } = require('selenium-webdriver');
const { Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

(async function example() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://ectest.trueautomation.io/flow');

        await driver.wait(until.elementLocated(By.id(ta("username","username")))).sendKeys('admin');
        await driver.findElement(By.css(ta('pass', '#password'))).sendKeys('changeme');
        await driver.findElement(By.className(ta('enterBtn', 'ec-ok-btn'))).click();

        await driver.wait(until.elementLocated(By.css(ta("adminPanel","span.username")))).click();
        await driver.wait(until.elementLocated(By.xpath(ta("logout","//span[text()='Logout']")))).click();
    } finally {
        await driver.quit();
    }
})();