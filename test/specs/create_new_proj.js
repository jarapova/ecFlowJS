const { By, until } = require('selenium-webdriver');
const { Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');


(async function example() {
    const driver = new Builder().forBrowser('chrome').build();

    String.random = function (length) {
        let radom13chars = function () {
            return Math.random().toString(16).substring(2, 15)
        };
        let loops = Math.ceil(length / 13)
        return new Array(loops).fill(radom13chars).reduce((string, func) => {
            return string + func()
        }, '').substring(0, length)
    };

    try {
        await driver.get('https://ectest.trueautomation.io/flow');
        await driver.wait(until.elementLocated(By.id(ta("username","username")))).sendKeys('admin');
        await driver.findElement(By.css(ta('pass', '#password'))).sendKeys('changeme');
        await driver.findElement(By.className(ta('enterBtn', 'ec-ok-btn'))).click();
        await driver.wait(until.elementLocated(By.css(ta("humburg","div.at-main-menu-btn")))).click();
        await driver.wait(until.elementLocated(By.xpath(ta("projects","//a[@class='black-link nav-menu-category__item at-main-menu-projects']")))).click();
        await driver.wait(until.elementLocated(By.xpath(ta("addNew","span.at-add-item-btn")))).click();
        await driver.wait(until.elementLocated(By.css(ta("createNewProj","div.at-row-create-new")))).click();
        await driver.wait(until.elementLocated(By.css(ta("new_project_name","input.at-project-name-input")))).sendKeys('proj'+String.random(8));
        await driver.findElement(By.css(ta('okBtn', "div.at-ok-btn"))).click();
        await driver.wait(until.elementLocated(By.css(ta("confirmation","span.at-confirmation-attention-button-right")))).click();
    } finally {
        await driver.quit();
    }
})();