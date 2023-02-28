// suuce.spec.js created with Cypress
/// <reference types= "Cypress" />
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
Cypress.on('uncought:exceptions', () => false);
it("Mouse Over", () => {
    cy.visit("http://uitestingplayground.com/");
    cy.get(':nth-child(4) > :nth-child(3) > h3 > a').click();
    cy.get('.text-primary').dblclick()
    
    cy.get('#clickCount').contains('2')
    cy.get('#clickCount').should('have.text', '2')
    //
})