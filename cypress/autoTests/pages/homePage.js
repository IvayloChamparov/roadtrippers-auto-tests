class HomePage {

  // Define elents in the homepage
  loginButton() {
    return cy.get('a[data-target="#login"]').filter(':visible');
  }

  autopilotRadioButton() {
  return cy.get('#radio-autopilot');
  }

  toInput() {
  return cy.get('.search_input_to');
  }

  fromInput() {
    return cy.get('.search_input_from');
  }

  searchResults() {
    return cy.get('.search__results li');
  }

  goButton() {
  return cy.get('.plan_trip_search_button');
  }

  // Define methods and actions for the homepage
  clickLogin() {
    this.loginButton().click();
  }

  navigateToHomePage() {
  cy.visit('/');
  }

  /**
   * Closes the promo popup iframe if it appears on the page.
   * 
   * This method checks for any iframe whose id starts with "gist-"
   * (used by the promo modal provider) and removes it from the DOM
   * to prevent it from interfering with tests.
   */
  closePopupIfPresent() {
    cy.get('body').then(($body) => {
      const iframes = $body.find('iframe[id^="gist-"]');

      if (iframes.length) {
        $body.find('iframe[id^="gist-"]').remove();
      }
    });
  }

  /**
   * Accepts the OneTrust cookie banner if it appears.
   * 
   * This method checks for the presence of the
   * #onetrust-accept-btn-handler button and clicks it
   * if it exists and is visible.
   */
  acceptCookiesIfPresent() {
    cy.get('body').then(($body) => {
      const cookieBtn = $body.find('#onetrust-accept-btn-handler');

      if (cookieBtn.length) {
        cy.get('#onetrust-accept-btn-handler', { timeout: 10000 })
          .should('be.visible')
          .click();
      }
    });
  }

  selectAutopilotPlanningStyle() {
  this.autopilotRadioButton()
    .should('exist')
    .check()
    .should('be.checked');
  }
  
  selectFirstSearchResult(inputElement, text) {
  inputElement()
    .should('be.visible')
    .clear()
    .type(text);

  this.searchResults()
    .should('have.length.greaterThan', 0)
    .first()
    .click();
  }

  selectRoute(fromCity, toCity) {
  this.selectFirstSearchResult(this.toInput, toCity);
  this.selectFirstSearchResult(this.fromInput, fromCity);
  }

  clickGoButton() {
  this.goButton()
    .should('be.visible')
    .and('not.be.disabled')
    .click();
  }
}

export default new HomePage();