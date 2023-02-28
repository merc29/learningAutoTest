/// <reference types= "Cypress" />
import CustomerPage from "../pageObject/loginCustomerPage";

const cp = new CustomerPage();

describe('Checking currency on any cutomer page', function(){ 
Cypress.on('uncought:exceptions', () => false);
before( "view customer page", () => {
   cp.login_as_any_customer()
   /*cp.start_page();
   cp.go_to_pre_customer_page();
   
   cp.select_random_customer();
   cp.login_customer(); */
 })
it("checking currency", () => {
   
   //checking currency
   cy.get('#accountSelect').select(0)
   cy.get('.borderM > :nth-child(3) > :nth-child(3)').should('exist')
   cy.get('.borderM > :nth-child(3) > :nth-child(3)').contains('Dollar')

   cy.get('#accountSelect').select(1)
   cy.get('.borderM > :nth-child(3) > :nth-child(3)').contains('Pound')

   cy.get('#accountSelect').select(2)
   cy.get('.borderM > :nth-child(3) > :nth-child(3)').contains('Rupee')


   

})
})
