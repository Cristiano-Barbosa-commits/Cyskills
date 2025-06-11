describe('login', () => {

  beforeEach(()=> {
  cy.goHome()
  })

  it('deve logar com sucesso', () => {
  
    cy.login('papito@cyskills.com.br', 'showtime')

    cy.userLoggedIn()

    cy.get('[data-cy="welcome-title"]')
    .should(`be.visible`)
    .and(`have.text`, `Boas vindas ao Cypress Playground`)
  })

   it('Não deve logar com senha inválida', () => {
    cy.login('papito@cyskills.com.br', 'abc123456')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')

  })

  it('Não deve logar com email não cadastrado', () => {

    cy.login('404@cyskills.com.br', 'abc123456')
     cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')

  })

   it('Não deve logar com email incorreto', () => {
    
    cy.login('www.cypressskills.com.br', 'showtime')
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')

  })
})

