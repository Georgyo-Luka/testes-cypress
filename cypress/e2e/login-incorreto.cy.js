describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app'); // entra no site
    cy.get('[data-test="login-button"]').click(); // clica no botão de login
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
      statusCode: 400,
    }).as('stubPost');
  });

  it('Deve exibir mensagens de erro para email e senha inválidos', () => {
    cy.login('anaemail.com', 'senha123');
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
  });

  it('Deve exibir mensagem de falha mesmo com email e senha válidos', () => {
    cy.login('ana@email.com', 'Senha123');
    cy.wait('@stubPost');
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
  });
});