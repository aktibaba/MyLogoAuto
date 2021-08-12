/// <reference types="cypress" />


describe('Checking Signin Funcionality',function(){

   it('Sign in', function(){ 
      cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
      cy.get('#email').type('abd.akti@gmail.com')
      cy.get('#passwd').type('aktikadir') 
      cy.get("#SubmitLogin").click()
      cy.wait(3000)
      cy.get("p.info-account").should('be.visible')
})

  it('forgetpaswort',function(){
      cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
      cy.contains('Forgot your password?').click()
      cy.wait(3000) 
      cy.get('#email').type('abd.akti@gmail.com')
      cy.get('.submit').contains('Retrieve Password').click()
      cy.contains('A confirmation email has been sent to your address: abd.akti@gmail.com')
})


  it('verify mesage for invalid login', function(){
  
      cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
      cy.get('#email').type('abd.akti@gmail.com')
      cy.get('#passwd').type('aktikadir12') 
      cy.get("#SubmitLogin").click()
      cy.get('div.alert-danger').should("be.visible")
})

})

describe('Cheking Registration fonctionality',function(){

  it('verify form element',function(){
    
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account') 
    cy.get('#email_create').type(generatedEmail())
         function generatedEmail() {
            var text = "";
             var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text+'@gmail.com';
    }
     cy.get('#SubmitCreate').should('be.visible').click()
     cy.wait(3000)
     cy.get('#id_gender1').check()
     cy.get('#customer_firstname').should('be.visible').type('costumerName')
     cy.get('#customer_lastname').should('be.visible').type('costumerLastName')
     cy.get('#passwd').should('be.visible').type('12345')
     cy.get('#days').select('3').should('have.value', '3')
     cy.get('#months').select('December').should('have.value', '12')
     cy.get('#years').select('2010').should('have.value', '2010')
     //address part 
     cy.get('#firstname').should('be.visible').type('King')
     cy.get('#lastname').should('be.visible').type('LastNamem')
     cy.get('#address1').should('be.visible').type('Dallas Texas')
     cy.get('#city').should('be.visible').type('Garland')
     cy.get('#id_state').select('Texas').should('have.value', '43')
     cy.get('#postcode').should('be.visible').type('70025')
     cy.get('#phone_mobile').should('be.visible').type('1234567890')
     cy.get('#alias').should('be.visible').type('Home')
     cy.get('#submitAccount').should('be.visible').click();
    
  })

 
})


