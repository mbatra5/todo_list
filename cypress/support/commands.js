// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
/// <reference types="@applitools/eyes-cypress"/>
import returnBrowsers from "../support/pageObjects/Browsers";

Cypress.Commands.add("makeScreenshotWithHook", (screenshotname, scriptHook) => {
  cy.wait(3000);
  cy.scrollTo("bottom", { ensureScrollable: false });
  cy.scrollTo("top", { ensureScrollable: false });
  cy.eyesCheckWindow({
    tag: screenshotname,
    target: "window",
    fully: true,
    scriptHooks: { beforeCaptureScreenshot: scriptHook },
  });
});

Cypress.Commands.add("makeScreenshot", (screenshotname) => {
  cy.wait(3000);
  cy.scrollTo("bottom", { ensureScrollable: false });
  cy.scrollTo("top", { ensureScrollable: false });
  cy.eyesCheckWindow({ tag: screenshotname, target: "window", fully: true });
});

Cypress.Commands.add("eyes_setup", (test_name, execution_type) => {
  const browsers = new returnBrowsers();
  if (execution_type === "desktop") {
    cy.eyesOpen({
      appName: "todo_list",
      batchName: test_name,
      browser: browsers.getDesktopBrowsers(),
    });
  } else if (execution_type === "devices") {
    cy.eyesOpen({
      appName: "todo_list",
      batchName: test_name,
      browser: browsers.getDeviceBrowsers(),
    });
  }
  if (execution_type === "all") {
    cy.eyesOpen({
      appName: "todo_list",
      batchName: test_name,
      browser: browsers.getAllBrowsers(),
    });
  }
  if (execution_type === "chrome") {
    cy.eyesOpen({
      appName: "todo_list",
      batchName: test_name,
      browser: browsers.getChrome(),
    });
  }
  if (execution_type === "firefox") {
    cy.eyesOpen({
      appName: "todo_list",
      batchName: test_name,
      browser: browsers.getFirefox(),
    });
  }
  if (execution_type === "iphone") {
    cy.eyesOpen({
      appName: "todo_list",
      batchName: test_name,
      browser: browsers.getIphone(),
    });
  }
});

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
