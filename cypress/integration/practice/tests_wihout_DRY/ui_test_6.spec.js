// suuce.spec.js created with Cypress
/// <reference types= "Cypress" />
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
Cypress.on('uncought:exceptions', () => false);
it("invisible element", () => {
    cy.visit("http://uitestingplayground.com/");
    cy.get(':nth-child(4) > :nth-child(1) > h3 > a').click();
    cy.get('#removedButton').should('be.visible')
    cy.get('#hideButton').click()
    cy.get('#removedButton').should('not.be.visible')

 
    
    //
})