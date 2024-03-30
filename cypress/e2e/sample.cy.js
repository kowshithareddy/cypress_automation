describe("validate the login functionality",()=>{
    it("1 verify the login functionality with valid userName and valid password",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('[name="username"]').type("Admin")

        cy.get('[type="password"]').type("admin123")

        cy.get('[type="submit"]').click()

    
    })

    // it("test cases",()=>{

    
    // })

    // it("test cases",()=>{

    
    // })

    // it("test cases",()=>{

    
    // })

})