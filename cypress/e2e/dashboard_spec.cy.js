describe('Dashboard Test', () => {
  it('Monografi PJ click', () => {
    cy.visit('/')
    cy.get('#npa').type('99.0002')
    cy.get('#password').type('12345')
    cy.contains('Masuk').click()

    cy.get("#sum_monografi a").eq(0).contains("Detail Info").eq(0).click();
    cy.get('h1').should('contain', 'Data Pimpinan Jamaah')
  })

  it('Monografi PC click', () => {
    cy.visit('/')
    cy.get('#npa').type('99.0002')
    cy.get('#password').type('12345')
    cy.contains('Masuk').click()

    cy.get("#sum_monografi a").eq(1).contains("Detail Info").eq(0).click();
    cy.get('h1').should('contain', 'Data Pimpinan Cabang')
  })

  it('Monografi PD click', () => {
    cy.visit('/')
    cy.get('#npa').type('99.0002')
    cy.get('#password').type('12345')
    cy.contains('Masuk').click()

    cy.get("#sum_monografi a").eq(2).contains("Detail Info").eq(0).click();
    cy.get('h1').should('contain', 'Data Pimpinan Daerah')
  })

  it('Monografi PW click', () => {
    cy.visit('/')
    cy.get('#npa').type('99.0002')
    cy.get('#password').type('12345')
    cy.contains('Masuk').click()

    cy.get("#sum_monografi a").eq(3).contains("Detail Info").eq(0).click();
    cy.get('h1').should('contain', 'Data Pimpinan Wilayah')
  })

  it('Performa PJ click', () => {
    cy.visit('/')
    cy.get('#npa').type('99.0002')
    cy.get('#password').type('12345')
    cy.contains('Masuk').click()

    cy.get("#sum_performa a").eq(0).contains("Detail Info").eq(0).click();
    cy.get('h1').should('contain', 'Data Performa PJ')
  })

  it('Performa PC click', () => {
    cy.visit('/')
    cy.get('#npa').type('99.0002')
    cy.get('#password').type('12345')
    cy.contains('Masuk').click()

    cy.get("#sum_performa a").eq(1).contains("Detail Info").eq(0).click();
    cy.get('h1').should('contain', 'Data Performa PC')
  })

  it('Performa PD click', () => {
    cy.visit('/')
    cy.get('#npa').type('99.0002')
    cy.get('#password').type('12345')
    cy.contains('Masuk').click()

    cy.get("#sum_performa a").eq(2).contains("Detail Info").eq(0).click();
    cy.get('h1').should('contain', 'Data Performa PD')
  })

  it('Performa PW click', () => {
    cy.visit('/')
    cy.get('#npa').type('99.0002')
    cy.get('#password').type('12345')
    cy.contains('Masuk').click()

    cy.get("#sum_performa a").eq(3).contains("Detail Info").eq(0).click();
    cy.get('h1').should('contain', 'Data Performa PW')
  })

  it('Data Anggota click', () => {
    cy.visit('/')
    cy.get('#npa').type('99.0002')
    cy.get('#password').type('12345')
    cy.contains('Masuk').click()

    cy.get("#sum_user_anggota a").eq(0).contains("Detail Info").eq(0).click();
    cy.get('h1').should('contain', 'Data Anggota')
  })

  it('Sudah Heregistrasi click', () => {
    cy.visit('/')
    cy.get('#npa').type('99.0002')
    cy.get('#password').type('12345')
    cy.contains('Masuk').click()

    cy.get("#sum_user_anggota a").eq(1).contains("Detail Info").eq(0).click();
    cy.get('h1').should('contain', 'Data User')
  })

  it('User Teregistrasi click', () => {
    cy.visit('/')
    cy.get('#npa').type('99.0002')
    cy.get('#password').type('12345')
    cy.contains('Masuk').click()

    cy.get("#sum_user_anggota a").eq(2).contains("Detail Info").eq(0).click();
    cy.get('h1').should('contain', 'Data User')
  })


})