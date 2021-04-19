/// <reference types="Cypress"/>

import { verify } from "cypress/types/sinon";

describe('Login', () => {
    const email = "chadwick@chadwick.com";
    const password = "12345678";


    it('does not work with wrong credentials', () => {
        cy.visit("http://localhost:4200");
        cy.contains("a.nav-link", "Sign in").click();
        cy.get('[data-cy=email]').type('baduser@baduse.com')
        cy.get('[data-cy=password]').type(password)
        cy.get("form").submit();
    });


    
    it('does work with correctly credentials', () => {
        cy.visit("http://localhost:4200");
        cy.contains("a.nav-link", "Sign in").click();
        cy.get('[data-cy=email]').type(email)
        cy.get('[data-cy=password]').type(password)
        cy.get("form").submit();
        cy.location("pathname").should("equal", "/");
    });

});