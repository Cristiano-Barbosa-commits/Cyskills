# Cypress Playground

Este projeto tem como objetivo automatizar testes de autenticação em uma aplicação fictícia, utilizando o **Cypress.io**, uma das ferramentas mais populares para testes end-to-end (E2E) de aplicações web.

## 🚀 Objetivo

Validar o fluxo de **login** de usuários, cobrindo cenários positivos e negativos, garantindo que a aplicação responda corretamente a diferentes tipos de entrada.

## 🧪 Cenários de Teste

O conjunto de testes cobre os seguintes casos:

1. ✅ **Login com sucesso**  
   - E-mail válido: `papito@cyskills.com.br`  
   - Senha válida: `showtime`  
   - Validação da mensagem de boas-vindas.

2. ❌ **Login com senha inválida**  
   - Mesmo e-mail válido  
   - Senha incorreta  
   - Validação de mensagem de erro:  
     `E-mail ou senha incorretos. Por favor, tente novamente!`

3. ❌ **Login com e-mail não cadastrado**  
   - E-mail inexistente  
   - Senha qualquer  
   - Validação da mesma mensagem de erro acima.

4. ❌ **Login com e-mail em formato inválido**  
   - E-mail mal formatado (`www.cypressskills.com.br`)  
   - Validação da mensagem:  
     `O formato do e-mail está incorreto. Por favor, verifique e tente novamente!`

## 🛠️ Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Git](https://git-scm.com/) instalado
- Cypress instalado localmente (ou via `npm`)

## ⚙️ Como rodar os testes

Clone o projeto e execute os testes com os seguintes comandos:

```bash
git clone https://github.com/Cristiano-Barbosa-commits/Cyskills.git
cd Cyskills
npm install
npx cypress open
