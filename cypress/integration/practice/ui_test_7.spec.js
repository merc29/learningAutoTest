///<reference types= "Cypress" />

describe('Client Side Delay', () => {
    it('Client Side Delay', () => {
      cy.clock()
      cy.visit('http://uitestingplayground.com/');
      cy.get(':nth-child(2) > :nth-child(2) > h3 > a').click()
      cy.get('#ajaxButton').click()
      cy.tick(15000)
      cy.get('.bg-success').should('be.visible')
      cy.contains('Data calculated on the client side.').should('be.visible')

    
      
    })
  })