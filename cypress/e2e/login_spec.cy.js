describe('Login Test', () => {
  it('Success login', () => {
    cy.visit('/')
    cy.get('#npa').type('99.0002')
    cy.get('#password').type('12345')
    cy.contains('Masuk').click()
    cy.get('h1').should('contain', 'Dashboard')
  })

  it('Fail login', () => {
    cy.visit('/')
    cy.get('#npa').type('99.0000')
    cy.get('#password').type('12345')
    cy.contains('Masuk').click()
    cy.get('p').should('contain', 'NPA tidak dikenali sistem')
  })
})