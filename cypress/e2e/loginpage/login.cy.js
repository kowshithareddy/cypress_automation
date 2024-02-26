import login from "../../page/login.po"
const log = new login();
describe("login functionality",()=>{
    it.only("verify loging with valid username and valid password",()=>{
        cy.visit('/')
        log.headerText().contains('Test login')
        log.userName().clear().type(Cypress.env('username'))
        log.password().clear().type(Cypress.env('password'))
        log.loginButton().click()
        log.loginSuccessfully().contains('Loged In Successfully')
        log.button().click()
        log.headerText().contains('Test login')
        

    })
    it("verify loging with valid username and invalid password",()=>{
        cy.visit('/')
        log.headerText().contains('Test login')
        log.userName().type(Cypress.env('username'))
        log.password().type(Cypress.env('password'))
        log.loginButton().click()
        cy.get('div#error').should('have.text','Your password is invalid!')

    })
    it("verify loging with in valid username and valid password",()=>{
        cy.visit('/')
        log.headerText().contains('Test login')
        log.userName().type('stunt')
        log.password().type("Password123")
        log.loginButton().click()
        cy.get('div#error').should('have.text','Your username is invalid!')

    })
})