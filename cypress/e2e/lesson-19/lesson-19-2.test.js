import { faker } from '@faker-js/faker'

describe ('lesson 19-2', () => {
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
        
        cy.get('#signupName').type(faker.person.firstName())
        cy.get('#signupLastName').type(faker.person.lastName())
        cy.get('#signupEmail').type("butik.tks+"+ faker.number.int() + "@gmail.com")
        cy.get('#signupPassword').type('Test!123', {sensitive: true})
        cy.get('#signupRepeatPassword').type('Test!123', {sensitive: true})
        cy.get('.modal-footer > .btn').click()
    })
})