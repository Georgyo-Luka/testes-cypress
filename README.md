# 🧪 Testes End-to-End com Cypress – Adopet

Este projeto contém testes automatizados end-to-end da plataforma **Adopet**, desenvolvidos durante a **Formação QA da Alura**, utilizando o framework **Cypress**. O objetivo é garantir que os principais fluxos da aplicação funcionem corretamente, tanto em cenários positivos quanto negativos.

## 🚀 Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) — Framework de testes E2E
- JavaScript (ES6)
- Node.js (necessário para rodar o Cypress)

## ✅ Testes cobertos

### 📋 Cadastro
- `cadastro-correto.cy`: Testa o cadastro com dados válidos.
- `cadastro-incorreto.cy`: Verifica mensagens de erro e validações ao cadastrar com dados inválidos.

### 🔐 Login
- `login-correto.cy`: Testa o login com credenciais válidas.
- `login-incorreto.cy`: Verifica o comportamento com login inválido.
- `fluxo-alternativo-login-correto.cy`: Testa um caminho alternativo de login com sucesso.
- `fluxo-alternativo-login-incorreto.cy`: Verifica erro em caminho alternativo com dados inválidos.

### 🐶 Adoção e navegação
- `teste-quem-ama-adota.cy`: Valida a exibição e funcionalidade da campanha "Quem ama, adota".
- `testes-pagina-principal.cy`: Verifica os elementos e links da página inicial.
- `testes-de-paginas-adopet.cy`: Testa a navegação entre páginas e seus conteúdos.

## ▶️ Como rodar os testes

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o Cypress:
   ```bash
   npx cypress open
   ```
   Ou em modo headless:
   ```bash
   npx cypress run
   ```

## 📄 Sobre

Este projeto foi desenvolvido como prática da **formação em Testes Automatizados** da plataforma **Alura**, com foco na qualidade de software e automação de testes E2E.