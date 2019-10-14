describe('/index Displays a list of something', () => {

  it('when user visits the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1')
      .should('contain', 'Test App')
  });

  it('.type() - type into a DOM element', () => {
    cy.get('.email-text')
    .type('fake@email.com').should('have.value', 'fake@email.com')
  })

  it('.click() - click in a DOM element', () => {
    cy.get('button').click()
      .should('have.class', 'Submit')
  })
  
  

});
