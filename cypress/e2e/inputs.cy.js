

describe('input fields', ()=> {

    beforeEach(()=> {
  cy.goHome()
  })

    it ( 'deve preencher o campo texto', ()=>{
        cy.login('papito@cyskills.com.br', 'showtime')

        cy.userLoggedIn()

        cy.get('nav a[href="/input-fields"]')
            .click()

        cy.contains('h2', 'Input Fields')
            .should('be.visible')

        cy.get('#fullname')
            .type('Fernando Papito')

        cy.get('input[name="email"]')
            .type('fernando@papito.dev')

        cy.get('input[name="number"]')
            .type('2024')

        cy.get('input[name="date"]')
            .type('2024-12-10')
    })
})