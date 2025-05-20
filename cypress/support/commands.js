Cypress.Commands.add('login', (email, senha) => {       
    cy.get('[data-test="input-loginEmail"]').type(email); 
    cy.get('[data-test="input-loginPassword"]').type(senha); 
    cy.get('[data-test="submit-button"]').click();
})

Cypress.Commands.add("cadastrar", (nome, email, senha) =>{
    cy.get('[data-test="input-name"]').type(nome); //enconta o input nome e digita o nome
    cy.get('[data-test="input-email"]').type(email); //enconta o input email e digita o email
    cy.get('[data-test="input-password"]').type(senha); //encontra o input senha e digita a senha
    cy.get('[data-test="input-confirm-password"]').type(senha); //encontra o input confirmar senha e digita a confirmação de senha
    cy.get('[data-test="submit-button"]').click(); //encontra o btn de cadastrar e clica 
}

)

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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })