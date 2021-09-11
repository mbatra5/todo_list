/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress"/>

import Homepage from "../../support/pageObjects/HomePage";
import AddOverlay from "../../support/pageObjects/Add_Overlay";

const execution_type = "desktop";
const TestName = "Add a new task";

describe("Add a new task", function () {
  before(function () {
    cy.visit(Cypress.env("url"));
  });

  beforeEach(function () {
    cy.eyes_setup(TestName, execution_type);
    cy.fixture("add_task.json").then(function (data) {
      this.data = data;
    });
  });

  /* GIVEN user lands on the Dashboard
   AND Clicks on ADD Button */

  it("User clicks on Add Button", function () {
    const HomePage = new Homepage();
    HomePage.minimizeChatWindow().click({ force: true });
    HomePage.getAddButton();
    cy.makeScreenshot("Add Overlay Opens");
  });

  /* GIVEN user clicks on the Add Button
   THEN the user is able to enter all the details
   AND submit to create a new task */

  it("User creates a new task", function () {
    const Add_Overlay = new AddOverlay();

    Add_Overlay.getTitle().type(this.data.title);
    Add_Overlay.getDescription().type(this.data.description);
    cy.makeScreenshot("Data can be entered in the fields");
  });

  /* GIVEN user clicks on Close button on the overlay
   THEN the dashboard should be seen
   AND the overlay should be closed */

  it("User Closes the Add Overlay", function () {
    const Add_Overlay = new AddOverlay();

    Add_Overlay.closeButton();
    cy.makeScreenshot("Overlay is closed and Dashboard is seen");
  });

  afterEach(function () {
    cy.eyesClose();
  });
});
