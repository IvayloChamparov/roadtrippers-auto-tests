class PromoModal {

    closeIfPresent() {
    cy.get('body').then(($body) => {
      if ($body.find('[data-message-display-type="modal"]').length) {
        cy.get('[data-message-display-type="modal"]')
          .within(() => {
            cy.get('button[onclick*="message.dismiss"]').click();
          });
      }
    });
  }

}

export default new PromoModal();