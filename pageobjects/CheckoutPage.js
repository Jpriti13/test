class CheckoutPage {
    constructor(driver) {
        this.driver = driver;
        this.checkoutButton = '#checkout';
        this.continueButton = '#continue';
        this.cartItems = '#cart-items';
        this.totalAmount = '#total-amount';
    }

    // Click on the checkout button to proceed to checkout
    clickCheckout() {
        return this.driver.findElement(this.checkoutButton).click();
    }

    // Click on the continue button to proceed with purchase
    clickContinue() {
        return this.driver.findElement(this.continueButton).click();
    }

    // Get the cart items present in checkout
    getCartItems() {
        return this.driver.findElements(this.cartItems);
    }

    // Get the total amount for the items in the cart
    getTotalAmount() {
        return this.driver.findElement(this.totalAmount).getText();
    }
}

module.exports = CheckoutPage;