describe('Mock some data', () => {
	it.only('Check the all items api call', () => {
		// cy.intercept(method, url, staticResponse)
		cy.fixture('items').then((i) => {
			const apiEndpoint = Cypress.env('api_server')
			cy.intercept('GET', apiEndpoint, i);
		})
		cy.visit('/');
		cy.get('[data-cy=item-list]').children().should('have.length', 5);
	})
})