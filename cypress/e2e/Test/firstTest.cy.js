///<reference types="Cypress"/>

// const closeOverlayIfVisible = () => {
//     cy.get('div.fixed.inset-0.z-[100]').then(($overlay) => {
//         if ($overlay.length > 0) {
//             cy.get('div.fixed.inset-0.z-[100]').invoke('remove'); // Or perform other actions to handle overlay
//         }
//     });
// };


describe('Kapiva login', () => {
    beforeEach(() => {
        cy.viewport(360, 667)
        cy.visit('https://staging.kapiva.in/')
        cy.wait(10000)
    })
    it('Verify the Login flow', () => {

        
        //closeOverlayIfVisible(); // Handle overlay if needed
        cy.get('header.sticky.shadow-lg')
        .find('button.h-full.px-1.lg\\:order-2')
        .scrollIntoView()
        .should('be.visible')
        .click({force:true})
        // cy.get('button.h-full.px-1.lg\\:order-2').scrollIntoView().should('be.visible');
        // cy.get('button.h-full.px-1.lg\\:order-2').click({ force: true })

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