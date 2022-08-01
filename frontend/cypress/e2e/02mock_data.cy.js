describe('Mock some data', () => {
	it.only('Check the all items api call', () => {
		cy.populateData();
		cy.get('[data-cy=item-list]').children().should('have.length', 5);
		cy.get('[data-cy=item-list] > :nth-child(1) button').click();
		cy.get('[data-cy=item-list] > :nth-child(3) button').click();
		cy.get('[data-cy=item-list] > :nth-child(5) button').click();
		cy.get('[data-cy=shopping-badge]').as('shopping-badge');
		cy.get('@shopping-badge').contains(3);
		cy.get('[data-cy=cart-button]').click();
		cy.get('[data-cy=added-to-cart]').children().should('have.length', 3);
		cy.get('[data-cy=shop-name]').click();
	})
})