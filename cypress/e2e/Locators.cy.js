describe('CSSLocators', () => {

    beforeEach( () => {
        // Visit page
        cy.visit('https://www.saucedemo.com/v1/index.html')
        // Fill in the Username field
        cy.get('input#user-name').type('standard_user')
        // Fill in the Password field
        cy.get("input[placeholder='Password']").type('secret_sauce')
        // Click on the "Login" button
        cy.xpath('/html/body/div[2]/div[1]/div/div/form/input[3]').click()
    })
    it('Verify if we are on inventory.html page', () => {
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[1]/div[3]/div').contains('Products')
    })
    it('Add to Cart feature', () => {
        // addToCart
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('ADD TO CART')
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('REMOVE')
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('ADD TO CART')
    })
})