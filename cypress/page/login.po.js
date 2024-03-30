class login{

    headerText(){

        return cy.get('#login h2')
    }
    userName(){ // camelcase    

        return cy.get('input#username ')    
    }
    password(){ // camelcase    

        return cy.get('input#password')
    }
    loginButton(){ // camelcase    

        return cy.get('button#submit')
    }
    loginSuccessfully(){ // camelcase    

        return  cy.get('.post-header  h1')
    }
    button(){ // camelcase    

        return  cy.get('div.wp-block-button')
    }
// method
    login(){
        this.userName().type("")
        this.userName().type("")
        this.userName().type("")
        this.userName().type("")
        this.userName().type("")
    }
}
export default login;    