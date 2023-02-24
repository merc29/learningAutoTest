// suuce.spec.js created with Cypress
/// <reference types= "Cypress" />
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
Cypress.on('uncought:exceptions', () => false);
it("successfull login", () => {
    cy.visit("http://uitestingplayground.com/");
    cy.get(':nth-child(4) > :nth-child(2) > h3 > a').click();
    cy.get('[placeholder="User Name"]').type('hey');
    cy.get('[name="Password"]').type('pwd');
    cy.get('#login').click();
    cy.get('#loginstatus').contains('Welcome, hey!')
    cy.get('#loginstatus').should('have.text', 'Welcome, hey!')
    
})