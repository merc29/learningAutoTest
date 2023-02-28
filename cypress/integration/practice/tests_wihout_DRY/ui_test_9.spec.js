///<reference types= "Cypress" />

describe('Overlapped Element', () => {
    it('create new customer', () => {
        cy.visit('http://uitestingplayground.com/');
        cy.get(':nth-child(5) > :nth-child(1) > h3 > a').click()
        cy.get('#id').type('newID')
        cy.get('[style="overflow-y: scroll; height:100px;"]').scrollTo('0%', '25%')
        cy.get('#name').type('some')
        cy.get('#name').should('be.visible')
    })
})
