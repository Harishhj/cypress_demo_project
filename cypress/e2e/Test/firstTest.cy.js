///<reference types="Cypress"/>
describe('Kapiva login', () => {
    beforeEach(() => {
        cy.viewport(360, 667)
        cy.visit('https://staging.kapiva.in/')
    })
    it('Verify the Login flow', () => {
        // cy.get('button.h-full.px-1.lg\:order-2')
        //     .should('be.visible')
        //     .click()
        //cy.get('div.relative').invoke('css', 'z-index', 'auto'); // Adjust z-index if necessary
        cy.get('div.fixed.inset-0.z-[100]').should('not.exist')
        cy.get('button.h-full.px-1.lg\\:order-2',{ timeout: 10000 }).as('hambeger')
        cy.get('@hambeger').scrollIntoView()
        cy.get('@hambeger').should('be.visible')
        cy.get('@hambeger').click({ force: true })
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

        cy.get("input[aria-label='Please enter verification code. Digit 1']")
            .should('be.visible')
            .type('676767')
        cy.task('log', 'entered OTP successfully')
    })
})