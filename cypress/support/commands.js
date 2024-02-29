// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import login from "../../page/login.po"
import login from "../page/login.po"
// import sample from "../../fixtures/sample.json"
// import example from "../../fixtures/example.json"
const log = new login();
Cypress.Commands.add('login', (userName, password) => { 

    log.userName().clear().type(userName)
    log.password().clear().type(password)
    log.loginButton().click()

})