// WebDriverManager.js

const { Builder } = require('selenium-webdriver');

class WebDriverManager {
    constructor() {
        this.driver = null;
    }

    async initialize() {
        this.driver = await new Builder()
            .forBrowser('chrome')
            .build();
    }

    getDriver() {
        if (!this.driver) {
            throw new Error('WebDriver is not initialized. Call initialize() first.');
        }
        return this.driver;
    }

    async quit() {
        if (this.driver) {
            await this.driver.quit();
            this.driver = null;
        }
    }
}

module.exports = new WebDriverManager();