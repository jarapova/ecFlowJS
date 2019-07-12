const { By, until } = require('selenium-webdriver');
const { Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');
// random_string = SecureRandom.hex;




(async function example() {
    const driver = new Builder().forBrowser('chrome').build();

    String.random = function (length) {
        let radom13chars = function () {
            return Math.random().toString(16).substring(2, 15)
        }
        let loops = Math.ceil(length / 13)
        return new Array(loops).fill(radom13chars).reduce((string, func) => {
            return string + func()
        }, '').substring(0, length)
    }

    try {
        await driver.get('https://ectest.trueautomation.io/flow');
        // let user_name = driver.wait(until.elementLocated(By.id(ta("username","username"))))
        // user_name.sendKeys("admin");
        // все равно что  await driver.wait(until.elementLocated(By.id(ta("username","username"))),5000).sendKeys("admin");

        // console.log(String.random(50));

        await driver.wait(until.elementLocated(By.id(ta("username","username")))).sendKeys('admin');
        await driver.findElement(By.css(ta('pass', '#password'))).sendKeys('changeme');
        await driver.findElement(By.className(ta('enterBtn', 'ec-ok-btn'))).click();
        await driver.wait(until.elementLocated(By.css(ta("humburg","div.at-main-menu-btn")))).click();
        await driver.wait(until.elementLocated(By.xpath(ta("environments","//span[@title='Environments']")))).click();
        await driver.findElement(By.css(ta('addNew', "span.at-add-item-btn"))).click();
        await driver.findElement(By.css(ta('createNewEnv', "div.at-create-new-env"))).click();
        await driver.findElement(By.css(ta('nameInput', "input.at-environment-name-input"))).sendKeys('env'+String.random(8));
        await driver.findElement(By.css(ta('selectProj', "div.at-select-header-title"))).click();
        await driver.wait(until.elementLocated(By.xpath(ta('defaultProj', "//div[@class='ec-project-select-picker__project-options']//div[text()='Default']")))).click();
        await driver.findElement(By.css(ta('okBtn', "div.at-ok-btn"))).click

    } finally {
        await driver.quit();
    }
})();