import HomePage from '../autoTests/pages/homePage';
import loginModal from '../autoTests/pages/loginModal';


describe('Create Trips Tests', () => {

   /**
   * Navigates to the Roadtrippers homepage
   * and logs into the application before each test.
   */
  beforeEach(() => {

    HomePage.navigateToHomePage();
    cy.url({ timeout: 10000 }).should('include', 'roadtrippers.com');
    HomePage.closePopupIfPresent();
    HomePage.acceptCookiesIfPresent();
    HomePage.clickLogin();
    loginModal.loginWithEnv('usernameIvayloOne', 'passwordIvayloOne');

  });

  it('Create new trip with valid credentials', () => {


  });

});