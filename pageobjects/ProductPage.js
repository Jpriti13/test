class ProductPage {
    constructor() {
        this.productList = ".product-list";
        this.productItem = ".product-item";
        this.productTitle = ".product-title";
        this.productPrice = ".product-price";
    }

    getProductList() {
        return cy.get(this.productList);
    }

    getProductItems() {
        return cy.get(this.productItem);
    }

    getProductTitle(index) {
        return this.getProductItems().eq(index).find(this.productTitle);
    }

    getProductPrice(index) {
        return this.getProductItems().eq(index).find(this.productPrice);
    }

    clickOnProduct(index) {
        this.getProductItems().eq(index).click();
    }
}

export default ProductPage;
