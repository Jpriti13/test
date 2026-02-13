Feature: Checkout functionality

  Scenario: Successful checkout
    Given the user has items in the cart
    When the user proceeds to checkout
    Then the user should see a summary of the order
    And the user should be able to enter payment details
    And the user should confirm the order
    And a confirmation message should be displayed

  Scenario: Checkout with empty cart
    Given the user has no items in the cart
    When the user attempts to checkout
    Then an error message should be displayed
    And the user should be redirected to the shopping page
