class CartPage {
    constructor(driver) {
        this.driver = driver;
        this.cartIcon = 'selector for cart icon';
        this.checkoutButton = 'selector for checkout button';
        this.itemsList = 'selector for items in cart';
    }

    async openCart() {
        await this.driver.findElement(this.cartIcon).click();
    }

    async getItemsCount() {
        return await this.driver.findElements(this.itemsList).length;
    }

    async proceedToCheckout() {
        await this.driver.findElement(this.checkoutButton).click();
    }
}

module.exports = CartPage;