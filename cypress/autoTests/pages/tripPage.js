class TripPage {

  waypointList() {
    return cy.get('.waypoint-list');
  }

  assertOnboardingUrl() {
    cy.url().should('contain', 'https://maps.roadtrippers.com/onboarding');
  }

  assertWaypointListExists() {
    this.waypointList()
      .should('exist')
      .and('be.visible')
      .within(() => {
        cy.get('.onboarding-waypoint-view')
          .should('have.length.greaterThan', 0);
      });
  }

  assertFirstWaypoints(expectedWaypoints = []) {
    this.waypointList().within(() => {
      expectedWaypoints.forEach((name, index) => {
        cy.get('.onboarding-waypoint-view').eq(index)
          .find('.waypoint-primary-label')
          .should('contain.text', name);
      });
    });
  }
}

export default new TripPage();