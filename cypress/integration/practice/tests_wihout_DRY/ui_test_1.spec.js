// suuce.spec.js created with Cypress
/// <reference types= "Cypress" />

// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
Cypress.on('uncought:exceptions', () => false);
it("Dynamic click", () => {
    cy.visit("http://uitestingplayground.com/");
    cy.get(':nth-child(2) > :nth-child(3) > h3 > a').click();
    cy.get('#badButton').click();
    cy.get('#badButton').should('be.visible')
})