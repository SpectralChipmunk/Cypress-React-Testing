describe('Mock some data', () => {
	it.only('Check the all items api call', () => {
		cy.populateData();
		cy.get('[data-cy=item-list]').children().should('have.length', 5);
	})
})