/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress"/>
import Homepage from "../../support/pageObjects/HomePage";

const execution_type = "desktop";
const TestName = "To Do List Dashboard";

describe("To do List Dashboard", function () {
  before(function () {
    cy.eyes_setup(TestName, execution_type);
    cy.visit(Cypress.env("url"));
  });

  it("To Do List Dashboard", function () {
    const HomePage = new Homepage();
    HomePage.minimizeChatWindow().click({ force: true });
    cy.makeScreenshot("To Do List Dashboard");
  });

  after(function () {
    cy.eyesClose();
  });
});
