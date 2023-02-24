///<reference types= "Cypress" />

describe('Load Delays', () => {
    it('Load Delays', () => {
      cy.clock()
      cy.visit('http://uitestingplayground.com/');
      cy.get(':nth-child(1) > :nth-child(4) > h3 > a').click()
      cy.get('.btn').should('be.visible')
      cy.get('.btn').click()


    
      
    })
  })