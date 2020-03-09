let databaseName="TestDatabase"+Math.floor(Date.now() / 1000)

before(function(){
    cy.visit('http://computer-database.herokuapp.com/computers')
        cy.get('.btn.success').click()
        cy.get("#name").click().type(databaseName)
        cy.get("#introduced").click().type("2010-01-01")
        cy.get("#discontinued").click().type("2010-01-01")
        cy.get("#company").select("Thinking Machines")
        cy.get('.btn.primary').click()
        cy.get(".alert-message.warning").should('include.text',`Done! Computer ${databaseName} has been created`)
})
describe('Get newly added  Comupter to databse',function(){
    it('search for newly added computer to database on home page',function(){
        cy.get("#searchbox").click().type(databaseName)
        cy.get("#searchsubmit").click('left')
        cy.get(".computers.zebra-striped").find('tbody tr:last').find('td')
        .first()
        .should('have.text', databaseName)
    })

});
