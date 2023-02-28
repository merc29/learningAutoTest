/// <reference types= "Cypress" />


Cypress.on('uncought:exceptions', () => false);
it("view manager page", () => {
    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
    
})