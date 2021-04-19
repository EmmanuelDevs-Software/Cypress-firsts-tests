/// <reference types="Cypress"/>

describe("My Firest Test Suite", () => {
  it("test url works", () => {
    cy.visit("http://localhost:4200");
  });

  it("test signup exists", () => {
    cy.contains("a.nav-link", "Sign up").click();
  });

  it("test signin exists", () => {
    cy.contains("a.nav-link", "Sign in").click();
  });
});
