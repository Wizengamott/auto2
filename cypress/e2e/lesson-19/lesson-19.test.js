describe ('lesson 19', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',      
                password: 'welcome2qauto'
            },
        });
    });

    it ('Check "Name" field', () => {
        cy.get('.hero-descriptor_btn').click()
        cy.get('#signupName').click().blur()
        cy.get(':nth-child(1) > .invalid-feedback > p').should('have.text', 'Name required')
        cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('#signupName').type('тест')
        cy.get(':nth-child(1) > .invalid-feedback > p').should('have.text', 'Name is invalid')
        cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('#signupName').clear().type('w')
        cy.get(':nth-child(1) > .invalid-feedback > p').should('have.text', 'Name has to be from 2 to 20 characters long')
        cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('#signupName').clear().type('wwwwwwwwwwwwwwwwwwwww')  // пробіли поле не ігнорує, видає невалідне ім'я. Не чіпав таку частину
        cy.get(':nth-child(1) > .invalid-feedback > p').should('have.text', 'Name has to be from 2 to 20 characters long')
        cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('.modal-footer > .btn').should('be.disabled')  // додав у кожен тест по 1 разу. Для домашки буде ок
    })

    it ('Check "Last name" field', () => {
        cy.get('.hero-descriptor_btn').click()
        cy.get('#signupLastName').click().blur()
        cy.get(':nth-child(2) > .invalid-feedback > p').should('have.text', 'Last name required')
        cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('#signupLastName').type('тест')
        cy.get(':nth-child(2) > .invalid-feedback > p').should('have.text', 'Last name is invalid')
        cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('#signupLastName').clear().type('w')
        cy.get(':nth-child(2) > .invalid-feedback > p').should('have.text', 'Last name has to be from 2 to 20 characters long')
        cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('#signupLastName').clear().type('wwwwwwwwwwwwwwwwwwwww')
        cy.get(':nth-child(2) > .invalid-feedback > p').should('have.text', 'Last name has to be from 2 to 20 characters long')
        cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('.modal-footer > .btn').should('be.disabled')
    })

    it ('Check "Email" field', () => {
        cy.get('.hero-descriptor_btn').click()
        cy.get('#signupEmail').click().blur()
        cy.get(':nth-child(3) > .invalid-feedback > p').should('have.text', 'Email required')
        cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('#signupEmail').type('тест')
        cy.get(':nth-child(3) > .invalid-feedback > p').should('have.text', 'Email is incorrect')
        cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('#signupEmail').clear().type('bu@gmail,com')   // можливо багато варіантів, я зупинюсь на 2, бо ідентично  
        cy.get(':nth-child(3) > .invalid-feedback > p').should('have.text', 'Email is incorrect')
        cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('.modal-footer > .btn').should('be.disabled')
    })

    it ('Check "Password" field', () => {
        let error = 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'

        cy.get('.hero-descriptor_btn').click()
        cy.get('#signupPassword').click().blur()
        cy.get(':nth-child(4) > .invalid-feedback > p').should('have.text', 'Password required')
        cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('#signupPassword').type('Test!12', { sensitive: true })  // 7
        cy.get(':nth-child(4) > .invalid-feedback > p').should('have.text', error)
        cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('#signupPassword').type('Test!12Test!1222')  // 16
        cy.get(':nth-child(4) > .invalid-feedback > p').should('have.text', error)
        cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('#signupPassword').type('test!123')  // w/o capital letter
        cy.get(':nth-child(4) > .invalid-feedback > p').should('have.text', error)
        cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('#signupPassword').type('TEST!123')  // w/o small letter
        cy.get(':nth-child(4) > .invalid-feedback > p').should('have.text', error)
        cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('.modal-footer > .btn').should('be.disabled')
    })

    it ('Check "Re-enter password" field', () => {
        cy.get('.hero-descriptor_btn').click()
        cy.get('#signupRepeatPassword').click().blur()
        cy.get(':nth-child(5) > .invalid-feedback > p').should('have.text', 'Re-enter password required')
        cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('#signupPassword').type('Test!123')
        cy.get('#signupRepeatPassword').type('Test!1234')  
        cy.get(':nth-child(5) > .invalid-feedback > p').should('have.text', 'Passwords do not match')
        cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('.modal-footer > .btn').should('be.disabled')
    })

})