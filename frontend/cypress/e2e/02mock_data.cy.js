describe('Mock some data', () => {
	it.only('Check the navbar', () => {
		// cy.intercept(method, url, staticResponse)
		cy.intercept('GET', 'http://localhost:3001/allitems', []);
		cy.visit('/');
		cy.get('[data-cy=item-list]').children().should('have.length', 0);
	})
})