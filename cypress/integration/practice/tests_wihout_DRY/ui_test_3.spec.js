// suuce.spec.js created with Cypress
/// <reference types= "Cypress" />
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
Cypress.on('uncought:exceptions', () => false);
it("Text Input", () => {
    cy.visit("http://uitestingplayground.com/");
    cy.get(':nth-child(2) > :nth-child(4) > h3 > a').click();
    cy.get('#newButtonName').type('hey!');
    cy.get('#updatingButton').click();
    cy.get('#updatingButton').contains('hey!')
    cy.get('#updatingButton').should('have.text', 'hey!')
})