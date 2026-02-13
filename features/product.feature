Feature: Product Browsing and Selection

  Scenario: User browses products
    Given the user is on the homepage
    When the user navigates to the products page
    Then the user should see a list of products

  Scenario: User selects a product
    Given the user is on the products page
    When the user clicks on a product
    Then the user should be taken to the product details page
    And the user should see the product name
    And the user should see the product price