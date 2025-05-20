describe('Pagina de Cadastro', () => {
   beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); //entra no site
    cy.get('[data-test="register-button"]').click(); //clica no botao de cadastrar
    }) 

  it('Deve preencher os campos de formulario corretamente para cadastrar um novo user', () => {
    cy.get('[data-test="input-name"]').type("Ana de Jesus"); //enconta o input nome e digita o nome
    cy.get('[data-test="input-email"]').type("ana@email.com"); //enconta o input email e digita o email
    cy.get('[data-test="input-password"]').type("Senha123"); //encontra o input senha e digita a senha
    cy.get('[data-test="input-confirm-password"]').type("Senha123"); //encontra o input confirmar senha e digita a confirmação de senha
    cy.get('[data-test="submit-button"]').click(); //encontra o btn de cadastrar e clica 
  })
})
