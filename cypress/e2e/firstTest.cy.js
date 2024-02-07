describe('Verify Title of the Page', () => {
  it('TC01 - Verify Title of the Page - Positive', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq', 'OrangeHRM')
  })
  it('TC02 - Verify Title of the Page - Negative', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq', 'cypress')
  })
})