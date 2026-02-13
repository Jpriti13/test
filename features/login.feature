Feature: Swag Lab Login

  Scenario: Successful login
    Given I visit the Swag Lab login page
    When I enter valid credentials
    And I click the login button
    Then I should see the homepage

  Scenario: Unsuccessful login
    Given I visit the Swag Lab login page
    When I enter invalid credentials
    And I click the login button
    Then I should see an error message