class CustomerPage {
    start_page(){

    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
    cy.contains('Home').should('be.visible');
    cy.contains('Customer').should('be.visible');
    cy.contains('Manager').should('be.visible');
    cy.title().should('eq', 'XYZ Bank');
    }
   customer_btn(){
        return cy.contains('Customer');
    }
    go_to_pre_customer_page(){
        cy.contains('Customer').click();
        cy.contains('Home').should('be.visible');
        cy.contains('---Your Name---').should('be.visible');
        cy.title().should('eq', 'XYZ Bank');
    }

    select_random_customer(){
        const num_of_customer = Math.floor(Math.random() * 5) + 1;
        cy.get('#userSelect').select(num_of_customer)
        
    }
    login_customer(){
        cy.contains('Login').should('be.visible');
        cy.contains('Login').click();
        cy.contains('Logout').should('be.visible')
        cy.contains('Home').should('be.visible')
        cy.contains('Transactions').should('be.visible')
        cy.contains('Withdrawl').should('be.visible')
        cy.contains('Deposit').should('be.visible')
        cy.title().should('eq', 'XYZ Bank')
    }

    account_selector(){
        return  cy.get('#accountSelect')
    }

    logout_btn(){
        return cy.contains('Logout');

    }

    home_btn(){
        return cy.contains('Home')
    }

    transaction_btn(){
        return cy.contains('Transactions')
    }

    withdrawl_btn(){
        return cy.contains('Withdrawl')
    }

    deposit_btn(){
        return cy.contains('Deposit')
    }




}
export default CustomerPage
