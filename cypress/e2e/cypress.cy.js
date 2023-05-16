// <reference types="cypress" />

describe('Nom de la suite de test', () => {
    it('Nom du premier scenario de test', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.get('#userName').type("user name")
        cy.get('#userEmail').type("username@gmail.com")
        cy.get('#currentAddress').type("current address")
        cy.get('#permanentAddress').type("permanent address")
        cy.get('#submit').click()
    
        });
    });