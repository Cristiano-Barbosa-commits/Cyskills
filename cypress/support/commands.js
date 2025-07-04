// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('goHome', ()=>{
      cy.viewport(1920,1080)

     cy.visit('https://playground.cyskills.com.br/login')

    cy.contains('h2', 'Faça login').should('be.visible')
})

Cypress.Commands.add('login', (email, password)=> {
  cy.get('[data-cy="email"]').type(email)
  cy.get('[data-cy="password"]').type(password)

  cy.get('[data-cy="login-button"]').click()
})

Cypress.Commands.add('userLoggedIn', ()=>{
      cy.get('[data-cy="welcome-title"]')
    .should(`be.visible`)
    .and(`have.text`, `Boas vindas ao Cypress Playground`)
})

Cypress.Commands.add('noticeHave', (text)=> {
  cy.get('.notice p')
    .should('be.visible')
    .and('have.text', text)
})