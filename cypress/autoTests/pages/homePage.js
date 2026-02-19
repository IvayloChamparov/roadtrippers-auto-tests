class HomePage {

  loginButton = 'a[data-target="#login"]';

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  navigateToHomePage() {
    cy.visit('https://roadtrippers.com/');
  }
}

export default new HomePage();