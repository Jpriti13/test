class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.usernameField = driver.findElement(By.id('username')); // replace with actual id
        this.passwordField = driver.findElement(By.id('password')); // replace with actual id
        this.loginButton = driver.findElement(By.id('loginButton')); // replace with actual id
    }

    async enterUsername(username) {
        await this.usernameField.sendKeys(username);
    }

    async enterPassword(password) {
        await this.passwordField.sendKeys(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}

module.exports = LoginPage;