describe('Fluxo de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__message').click();
    })
   
    it('Verifica mensagem de texto', () =>{

        cy.login('ana@email.com', 'Senha123')

    })
       
 });