///<reference types="Cypress"/>

describe('Kapiva login', () => {
    beforeEach(() => {
        cy.viewport(360, 667)
       // cy.setCookie('region', 'IN')
        cy.visit('https://kapiva.in/')
        cy.wait(10000)
    })
    it('Verify the Login flow', () => {
        // cy.get('[class="styles__HamburgerWarpper-sc-1qvuluh-0 hvMRYt"]')
        // .should('be.visible')
        // .click()
        // cy.task('log', 'clicked on hamberger menu successfully')

        // cy.get('a[href="#"]')
        // .should('be.visible')
        // .click()
        // cy.task('log', 'clicked on login button successfully')




        cy.get('button.h-full.px-1.lg\\:order-2')
            .scrollIntoView()
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

        cy.get("input[aria-label='Please enter verification code. Digit 1']")
            .should('be.visible')
            .type('676767')
        cy.task('log', 'entered OTP successfully')
    })
})