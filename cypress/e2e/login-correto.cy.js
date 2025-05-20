describe('Pagina de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/'); //entra no site
        cy.get('[data-test="login-button"]').click(); //clica no botao de fazer login
    }) 
    it('Deve preencher os campos do login corretamente e autenticar o usuario na página', () => {

      cy.login('ana@email.com', 'Senha123')
      
    })
  })