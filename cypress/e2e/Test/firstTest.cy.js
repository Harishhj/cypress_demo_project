describe('Kapiva login', () => {
    beforeEach(() => {
        cy.viewport(360, 667)
        cy.visit('https://staging.kapiva.in/')
    })
    it('Verify the Login flow', () => {
        cy.get('div > button.px-1')
            .should('be.visible')
            .click()
        cy.task('log', 'clicked on hamberger menu successfully')

        cy.get("span[class ='text-white hover:text-white']")
            .should('be.visible')
            .click()
        cy.task('log', 'clicked on login button successfully')

        cy.get('#outlined-basic')
            .should('exist')
            .type('9480507672')
        cy.task('log', 'entered phone number successfully')

        cy.get('[id=":r1:"]')
            .should('be.enabled')
            .click()
        cy.task('log', 'clicked on submit button successfully')
    })
})