const { By, until } = require('selenium-webdriver');
const { Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

(async function example() {
    const driver = new Builder().forBrowser('chrome').build();


    try {
        await driver.get('https://ectest.trueautomation.io/flow');

        await driver.findElement(By.xpath(ta('login', "//input[@id='username']"))).sendKeys('admin');
        await driver.findElement(By.xpath(ta('pass', "//input[@id='password']"))).sendKeys('changeme');
        await driver.findElement(By.xpath(ta('enter', "//button[text()='Login']"))).click();
        await driver.wait(until.titleIs('Releases – ElectricFlow'), 5000);
        await driver.sleep(2000);

        await driver.findElement(By.css(ta('selectProject', 'div.project-select-popover'))).click();
        await driver.sleep(2000);

        await driver.findElement(By.css(ta('EcExamplesProj', 'div.at-project-select-item-picker-2'))).click();
        await driver.findElement(By.css(ta('Ecloud', 'div.at-project-select-item-picker-5'))).click();
        await driver.findElement(By.css(ta('apply', 'div.at-project-select-submit'))).click();
        await driver.sleep(2000);
        await driver.findElement(By.css(ta('selectProject', 'div.project-select-popover'))).click();
        await driver.sleep(2000);
        await driver.findElement(By.css(ta('EcExamplesProjUnselect', '.at-project-select-item-picker-1.ec-project-select-picker__project--selected'))).click();
        await driver.findElement(By.css(ta('EcloudUnselect', '.at-project-select-item-picker-2.ec-project-select-picker__project--selected'))).click();
        await driver.sleep(2000);
        await driver.findElement(By.css(ta('apply', 'div.at-project-select-submit'))).click();

    } finally {
        await driver.quit();
    }
})();