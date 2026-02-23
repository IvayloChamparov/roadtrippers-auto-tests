import HomePage from '../autoTests/pages/homePage';
import loginModal from '../autoTests/pages/loginModal';
import TripPage from '../autoTests/pages/tripPage';


describe('Create Trips Tests', () => {

   /**
   * Navigates to the Roadtrippers homepage
   * and logs into the application before each test.
   */
  beforeEach(() => {

    HomePage.navigateToHomePage();

    // TODO: Replace the static timeout with a fluent/wait strategy to ensure the homepage 
    // fully loads before proceeding with actions.
    cy.url({ timeout: 10000 }).should('include', 'roadtrippers.com');
    HomePage.closePopupIfPresent();
    HomePage.acceptCookiesIfPresent();
    HomePage.clickLogin();
    loginModal.loginWithEnv('usernameIvayloOne', 'passwordIvayloOne');

  });

  // The following section of code has not been tested yet. A significant 
  // portion of this code requires refactoring, not only within the test file itself 
  // but also across the related Page Object Model (POM) pages.
  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  it('Create new trip with valid credentials', () => {

    HomePage.selectAutopilotPlanningStyle();
    HomePage.selectRoute('Sacramento', 'Washington');
    HomePage.clickGoButton();

    TripPage.assertOnboardingUrl();
    TripPage.assertWaypointListExists();
    TripPage.assertFirstWaypoints(['Washington', 'Sacramento']);
  });

  it('Should not allow trip creation if one or both locations are empty', () => {
  HomePage.selectAutopilotPlanningStyle();
  HomePage.selectFirstSearchResult(HomePage.toInput, 'Sacramento');
  HomePage.clickGoButton();
  HomePage.goButton().should('be.disabled'); 
  cy.contains('Please enter both starting point and destination').should('be.visible');
  });

  it('Should display error when entering invalid locations', () => {
  HomePage.selectAutopilotPlanningStyle();
  HomePage.selectFirstSearchResult(HomePage.fromInput, 'InvalidCity1');
  HomePage.selectFirstSearchResult(HomePage.toInput, 'InvalidCity2');
  cy.get('.search__results').should('be.empty');
  HomePage.goButton().should('be.disabled');
  cy.contains('No results found').should('be.visible');
  });

});