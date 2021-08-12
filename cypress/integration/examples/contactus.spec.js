
/// <reference types="cypress" />


describe('Checking contoctUs Funcionality',function(){

    it('contactUs', function(){
       cy.visit('http://automationpractice.com/index.php?controller=contact') 
       cy.get('#id_contact').select('Customer service').should('have.value', '2')
       cy.get('#email').type('abd.akti@gmail.com')
       cy.get('#id_order').type('123456')
       cy.get('#message').type('I am contacting with you')
       const fileName='logo.jpg';
         cy.fixture(fileName).then(fileContent => {
         cy.get('#fileUpload').attachFile({fileContent,fileName, mimeType: 'application/jpg',}); })
       cy.contains('Send').should('be.visible').click()
       cy.wait(300)
       cy.contains('Your message has been successfully sent to our team.')
  });
   })

    