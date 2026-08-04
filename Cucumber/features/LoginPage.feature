Feature: login validations
    @LoginPage
    @Ecommerece
  Scenario Outline: login to the page
    Given a login to application with "<username>" and "<password>" 
    When click submit button
    Then Verify error code is present
    Examples:
    | username                  | password  |
    | Vignesh@gmail.com         | wiki1310  |
    |vigneshwiki1323@gmail.com  | Vig1310   |