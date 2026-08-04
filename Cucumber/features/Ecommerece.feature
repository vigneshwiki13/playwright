Feature: Ecommerece validations
//npx cucumber-js Cucumber/features --tags "@Ecommerece" --exit   to run with tags
//npx cucumber-js Cucumber/features/Ecommerece.feature --parallel 2 --exit ==> for parallel 2 indicates workers
//npx cucumber-js Cucumber/features/Ecommerece.feature --parallel 2 --exit --format html:cucumber.html
// chcek report on workspace cucumber.html cucumber is a file name

// npx cucumber-js Cucumber/features/Ecommerece.feature --retry 1 --parallel 2 --exit --format html:cucumber.html
//to run failed rerun
//can configure on package.json using commands like : npm run cucumberRetry

@Ecommerece
  Scenario: Placing the order
    Given a login to Ecommerece application with "vigneshwiki1323@gmail.com" and "Vignesh@1310" 
    When Add "ZARA COAT " to Cart
    When Enter valid details and Place the order
    Then Verify order is present in the OrderHistory

    Scenario Outline: login to the page
    Given a login to application with "<username>" and "<password>" 
    When click submit button
    Then Verify error code is present
    Examples:
    | username                  | password  |
    | Vignesh@gmail.com         | wiki1310  |
    |vigneshwiki1323@gmail.com  | Vig1310   |
