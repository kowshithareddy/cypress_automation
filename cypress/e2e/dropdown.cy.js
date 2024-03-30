
describe("test suit",()=>{
    it("test cases",()=>{

        cy.on("uncaught:exception",()=>{
            return false
        })
        cy.visit('https://chercher.tech/practice/dropdowns')
        cy.get('[id="order-same"]').select('Apple')  // value

        cy.wait(5000)
        cy.get('[id="order-same"]').select('Bing') // text
        cy.wait(5000)
        cy.get('[id="order-same"]').select(3) // index
    
    })
})