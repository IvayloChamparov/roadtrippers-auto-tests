class HomePage {
  visit() {
    cy.visit('https://roadtrippers.com/');
  }
}

export default new HomePage();