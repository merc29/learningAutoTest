
/// <reference types= "Cypress" />


Cypress.on('uncought:exceptions', () => false);
it("view pre-customer page", () => {
    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
    cy.contains('Home').should('be.visible')
    cy.contains('Customer').should('be.visible')
    cy.contains('Manager').should('be.visible')
    cy.title().should('eq', 'XYZ Bank')
})