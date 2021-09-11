class HomePage {
  getAddButton() {
    return cy.get(".btn-group-sm > .btn-primary").click({ force: true });
  }

  minimizeChatWindow() {
    return cy.get("#minim_chat_window");
  }
}

export default HomePage;
