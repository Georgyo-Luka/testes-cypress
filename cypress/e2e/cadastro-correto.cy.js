describe('Pagina de Cadastro', () => {
   beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); //entra no site
    cy.get('[data-test="register-button"]').click(); //clica no botao de cadastrar
    }) 

  it('Deve preencher os campos de formulario corretamente para cadastrar um novo user', () => {
    
    cy.cadastrar("Georgyo Luka", "georgyo@email.com", "Senha123")

  })
})
