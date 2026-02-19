import HomePage from '../autoTests/pages/homePage';
Cypress.config('log', false);

describe('Create Trips Test', () => {

  it('Navigates to Roadtrippers homepage', () => {

    cy.intercept('https://h.clarity.ms/**', { log: false });
    cy.intercept('https://m.stripe.com/**', { log: false });
    
    HomePage.visit();

    cy.url().should('include', 'roadtrippers.com');

    cy.frameLoaded('iframe[id^="gist-"]');
    cy.iframe()
      .find('img[src*="close-padding"]')
      .click();
  });

});