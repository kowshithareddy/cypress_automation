describe("login functionality",()=>{
    it("verify loging with valid username and valid password",()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#login h2').contains('Test login')
        cy.get('input#username ').type('student')
        cy.get('input#password').type("Password123")
        cy.get('button#submit').click()
        cy.get('.post-header  h1').contains('Logged In Successfully')
        cy.get('div.wp-block-button').click()
        cy.get('#login h2').contains('Test login')
        

    })
    it("verify loging with valid username and invalid password",()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#login h2').contains('Test login')
        cy.get('input#username ').type('student')
        cy.get('input#password').type("Password1")
        cy.get('button#submit').click()
        cy.get('div#error').should('have.text','Your password is invalid!')

    })
    it.only("verify loging with in valid username and valid password",()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#login h2').contains('Test login')
        cy.get('input#username ').type('stuggdent')
        cy.get('input#password').type("Password123")
        cy.get('button#submit').click()
        cy.get('div#error').should('have.text','Your username is invalid!')

    })
})