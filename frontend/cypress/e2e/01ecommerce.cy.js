describe('Visit the application', () => {
  it('Visit the app', () => {
    cy.visit('/')
  })

  it('Check the text loading in DOM', () => {
    cy.visit('/')
    cy.get('.greeting').contains('You buy we deliver')
  })
})