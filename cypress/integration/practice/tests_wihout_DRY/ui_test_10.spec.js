///<reference types= "Cypress" />

describe('Class Attribute', () => {
    it('Class Attribute', () => {
        cy.visit('http://uitestingplayground.com/');
        cy.get(':nth-child(1) > :nth-child(2) > h3 > a').click()
        cy.get('.btn-primary').trigger(alert)
        
    })
})
