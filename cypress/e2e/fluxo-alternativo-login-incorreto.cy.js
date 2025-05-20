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

      cy.login('anaemail.com', 'senha123')

    })
 });