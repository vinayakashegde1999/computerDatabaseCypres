let databaseName="TestDatabase"+Math.floor(Date.now() / 1000)

describe('Add new Comupter to databse',function(){
    it('Successfully add the coputer and retrun to main page',function(){
        cy.visit('http://computer-database.herokuapp.com/computers')
        cy.get('.btn.success').click()
        cy.get("#name").click().type(databaseName)
        cy.get("#introduced").click().type("2010-01-01")
        cy.get("#discontinued").click().type("2010-01-01")
        cy.get("#company").select("Thinking Machines")
        cy.get('.btn.primary').click()
        cy.get(".alert-message.warning").should('include.text',`Done! Computer ${databaseName} has been created`)
    })

});