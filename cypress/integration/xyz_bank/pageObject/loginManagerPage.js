class ManagerPage {
    checkPage(){

    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
    cy.contains('Home').should('be.visible');
    cy.contains('Customer').should('be.visible');
    cy.contains('Manager').should('be.visible');
    cy.title().should('eq', 'XYZ Bank');
    }



}