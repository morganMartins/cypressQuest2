// <reference types="cypress" />

describe('Nom de la suite de test', () => {
    it('Nom du premier scenario de test', () => {
        cy.visit('https://www.saucedemo.com/') 
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()
    
        });
    });