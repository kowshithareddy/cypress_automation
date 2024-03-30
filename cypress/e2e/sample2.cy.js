
import samplelogin from "../page/sample.po"
import sample3 from "../fixtures/sample3.json"
const samplelog = new samplelogin()

describe('test suit', () => {
    it.only('test cases', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.login()
        cy.contains("Invalid credentials").should("be.visible")
    })
    it('test cases', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login()
        cy.contains("Invalid credentials").should("be.visible")
    })
    it('test cases', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login()
        cy.contains("Invalid credentials").should("be.visible")
    })

})