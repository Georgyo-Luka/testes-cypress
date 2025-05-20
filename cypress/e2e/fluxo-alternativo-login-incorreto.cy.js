describe('Fluxo de Login Incorreto', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__message').click();

    })
   
    it('Deve preencher o campo do email incorretamente e apresentar mensagem de erro ao user', () =>{
      cy.get('[data-test="input-loginEmail"]').type('anaemail.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha123');
      cy.get('[data-test="submit-button"]').click();  
      cy.contains('Por favor, verifique o email digitado').should('be.visible'); 
    })
    
    it('Deve preencher o campo da senha incorretamente e apresentar mensagem de erro ao user', () =>{
      cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
      cy.get('[data-test="input-loginPassword"]').type('senha123');
      cy.get('[data-test="submit-button"]').click();
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible'); 

    })
 });