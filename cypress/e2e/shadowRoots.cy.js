describe('',()=>{
    it("handling shadowroots",()=>{

        cy.visit("http://watir.com/examples/shadow_dom.html")
        cy.get('#shadow_host').shadow().find('[type="text"]').type('enter text')
        cy.get('#shadow_host').shadow().find('[type="checkbox"]').click()
    })
})