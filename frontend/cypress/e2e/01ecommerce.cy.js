describe('Visit the application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check the navbar', () => {
    cy.get('[data-cy=shop-name]').contains('Shopperz').and('have.attr', 'href');
  })

  it('Main shop section', () => {
    cy.get('[data-cy=page-title]').contains('You buy we deliver');
    cy.get('[data-cy=item-list]').children().should('have.length', 5);
    cy.get('[data-cy=item-list] > :nth-child(1) button').click();
    cy.get('[data-cy=item-list] > :nth-child(2) button').click();
    cy.get('[data-cy=shopping-badge]').as('shopping-badge');
    cy.get('@shopping-badge').contains(2);
    cy.get('[data-cy=cart-button]').click();
    cy.get('[data-cy=added-to-cart]').children().should('have.length', 2);
    cy.get('.cart-list > :nth-child(1) button').click();
    cy.get('[data-cy=added-to-cart]').children().should('have.length', 1);
  })
})



