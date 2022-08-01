describe('Visit the application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check the text loading in DOM', () => {
    cy.get('[data-cy=page-title]').contains('You buy we deliver')
  })
})