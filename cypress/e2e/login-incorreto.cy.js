describe('Pagina de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/'); //entra no site
        cy.get('[data-test="login-button"]').click(); //clica no botao de fazer login
    }) 
    it('Deve preencher os campos do login incorretamente e apresentar mensagens de erro ao user', () => {
      cy.get('[data-test="input-loginEmail"]').type("anaemail.com"); //encontra o campo email e preenche ele fora do padrao
      cy.get('[data-test="input-loginPassword"]').type("senha123"); //encontra o campo senha e preenche ele fora do padrão
      cy.get('[data-test="submit-button"]').click(); //encontra e clica no botão de entrar
      cy.contains('Por favor, verifique o email digitado').should('be.visible'); //verifica se a mensagem de erro aparece
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible'); //verifica se a mensagem de erro aparece

    })
  })