class Add_Overlay {
  getTitle() {
    return cy.get("#title1");
  }

  getDescription() {
    return cy.get("#description1");
  }

  closeButton() {
    return cy.get(".btn-close").click({ force: true });
  }
}

export default Add_Overlay;
