import HomePage from '../autoTests/pages/homePage';
import PromoModal from '../autoTests/pages/promoModal';
Cypress.config('log', false);

describe('Create Trips Test', () => {

  it('Navigates to Roadtrippers homepage', () => {
    
    HomePage.navigateToHomePage();

    cy.url().should('include', 'roadtrippers.com');

    HomePage.clickLogin();

    
    // Remove marketing iframes if they exist
    cy.get('body').then(($body) => {

      const iframes = $body.find('iframe[id^="gist-"]');

      if (iframes.length > 0) {
        cy.wrap(iframes).invoke('remove');
      }

    
  });

  });

});