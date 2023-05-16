// <reference types="cypress" />

describe('Back Market', () => {

    it('inscription valide', () => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register')
        cy.get('[data-qa="accept-cta"]').click()
        cy.get('#firstName').type("Don Diego")
        cy.get('#lastName').type("De la Vega")
        cy.get('#signup-email').type("dondiegodelavega@gmail.com")
        cy.get('#signup-password').type("Mexico123")
        cy.get('[data-qa="signin-submit-button"]').click()
        });

        it('inscription invalide', () => {
            cy.visit('https://preprod.backmarket.fr/fr-fr/register')
            cy.get('[data-qa="accept-cta"]').click()
            cy.get('#firstName').type("Don Diego")
            cy.get('#lastName').type("De la Vega")
            cy.get('#signup-email').type("dddlv@gmail.Com")
            cy.get('[data-qa="signup-submit-button"]').click()
            cy.get('.isolate > .flex').contains('Le champ mot de passe est obligatoire')
            });

    it('Connexion valide', () => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register')
        cy.get('[data-qa="accept-cta"]').click()
        cy.get('#signin-email').type("angelina.julie.dona@gmail.com")
        cy.get('#signin-password').type("Morlina123")
        cy.get('[data-qa="signin-submit-button"]').click()
        });

        it('Connexion invalide', () => {
            cy.visit('https://preprod.backmarket.fr/fr-fr/register')
            cy.get('[data-qa="accept-cta"]').click()
            cy.get('#signin-email').type("angelina.julie.dona@gmail.com")
            cy.get('#signin-password').type("Oups")
            cy.get('[data-qa="signin-submit-button"]').click()
            cy.get('[class="text-red-700 mt-4 body-2-light"]').contains('Saisissez un e-mail et un mot de passe valides.')
            });
    });