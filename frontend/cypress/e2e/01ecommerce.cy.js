describe('Visit the application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check the navbar', () => {
    cy.get('[data-cy=shop-name]').contains('Shopperz').and('have.attr', 'href');
  })

  it('Check main section', () => {
    cy.get('[data-cy=page-title]').contains('You buy we deliver');
    cy.get('[data-cy=item-list]').children().should('have.length', 5);
    cy.get('[data-cy=item-list] > :nth-child(1) button').click();
  })
})