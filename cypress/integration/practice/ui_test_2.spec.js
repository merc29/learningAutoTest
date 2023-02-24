// suuce.spec.js created with Cypress
/// <reference types= "Cypress" />
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
Cypress.on('uncought:exceptions', () => false);
it("Scrollbars with hidden button", () => {
    cy.visit("http://uitestingplayground.com/");
    cy.get(':nth-child(3) > :nth-child(1) > h3 > a').click();
    cy.get('#hidingButton').scrollIntoView()
    cy.get('#hidingButton').click()
    cy.get('#hidingButton').should('be.visible')
})