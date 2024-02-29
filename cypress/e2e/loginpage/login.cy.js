import login from "../../page/login.po"
import sample from "../../fixtures/sample.json"
import example from "../../fixtures/example.json"
const log = new login();
describe("login functionality",()=>{
    beforeEach(function () {
        cy.visit('/')
        cy.login('student','Password123')
      });
    it("verify loging with valid username and valid password",()=>{
        // using custom command
        // cy.login('student','Password123')
        log.loginSuccessfully().contains(sample.loginSuccessfully)
        log.button().click()
        log.headerText().contains(sample.headerText)
        

    })

    it("verify loging with valid username and invalid password",()=>{
        // using custom command
        // cy.login('student','Password1')
        cy.get('div#error').should('have.text','Your password is invalid!')

    })
    it("verify loging with in valid username and valid password",()=>{
        // using custom command
        // cy.login('stuent','Password123')
        cy.get('div#error').should('have.text','Your username is invalid!')

    })

})