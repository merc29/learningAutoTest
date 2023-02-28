/// <reference types= "Cypress" />
import CustomerPage from "../pageObject/loginCustomerPage";

const cp = new CustomerPage();

Cypress.on('uncought:exceptions', () => false);
it("view pre-customer page", () => {
   cp.start_page();
   cp.go_to_pre_customer_page();
   
   cp.select_random_customer();
   cp.login_customer();
   //checking currency
   cy.get('#accountSelect').select(0)
   cy.get('.borderM > :nth-child(3)').should('eq', 'Dollar')
   

})
