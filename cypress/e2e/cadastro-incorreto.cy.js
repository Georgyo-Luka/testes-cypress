describe('Pagina de Cadastro', () => {
   beforeEach(() => {
     cy.visit('https://adopet-frontend-cypress.vercel.app/'); //entra no site
     cy.get('[data-test="register-button"]').click(); //clica no botao de cadastrar
    }) 

    it('Deve preencher os campos de formulario incorretamente e exibir mensagens ao user', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/'); 
      cy.get('[data-test="register-button"]').click();
      cy.get('[data-test="submit-button"]').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible')
      cy.contains('Repita a senha criada acima').should('be.visible')
    })
  })
  