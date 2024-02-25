
describe("test suit",()=>{
    it("test cases",()=>{
        cy.visit('https://register.rediff.com/register/register.php')
        cy.get('select[name^= DOB_Day]').select('02')
    
    })
})