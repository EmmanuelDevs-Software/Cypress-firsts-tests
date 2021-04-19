/// <reference types="Cypress"/>

describe("Register", () => {
  it("Register a new user", () => {
    const username = "aguapanelaconlimon7";
    const email = "aguapanelaconlimon507@gmail.com";
    const password = "12345678";

    cy.visit("http://localhost:4200");
    cy.contains("a.nav-link", "Sign up").click();
    cy.location("pathname").should("equal", "/register");

    cy.get('[data-cy="username"]').type(username);
    cy.get('[data-cy="email"]').type(email);
    cy.get('[data-cy="password"]').type(password);
    cy.get("form").submit();

    cy.location("pathname").should("equal", "/");
    cy.contains('a.nav-link', 'Your Feed').should('have.class', 'nav-link active')
    cy.contains('a.nav-link', 'Global Feed').should('not.have.class', 'nav-link active')


    cy.contains('a.nav-link', 'Global Feed').click()
    cy.contains('a.nav-link', 'Global Feed').should('have.class', 'nav-link active')
  });
});
