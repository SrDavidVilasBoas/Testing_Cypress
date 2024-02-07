describe('Verify Title of the Page', () => {
    it('Iplicit Assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Should
        cy.url().should('include', 'orangehrmlive')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'opensource')

        // Title
        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('include', 'HRM')

        // Links
        cy.xpath('//a').should('have.length', '5')

        // Logo
        cy.get('.orangehrm-login-logo > img').should('be.visible')
        .and('exist')

        // Verify if the value is getting passed rightly
        cy.get('[name="username"]').type('Admin')
        cy.get('input[name="username"]').should('have.value', 'Admin')

    })

})