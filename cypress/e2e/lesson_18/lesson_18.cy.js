
describe ('lesson 18', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',      
                password: 'welcome2qauto'
            },
        });
    });

    it ('"Home" button exists', () => {
        cy.get('.-active').should('have.text', 'Home')
    })
    it ('"About" button exists', () => {
        cy.get('[appscrollto="aboutSection"]').should('have.text', 'About')
    })
    it ('"Contact" button exists', () => {
        cy.get('[appscrollto="contactsSection"]').should('have.text', 'Contacts')
    })
    it ('"Guest log in" button exists', () => {
        cy.get('.header_right > .header-link').contains('Guest')
    })
    it ('"Sign in" button exists', () => {
        cy.get('.header_right > .btn').should('have.class', 'btn btn-outline-white header_signin')
    })
    it ('"Sing up" button exists', () => {
        cy.get('.hero-descriptor_btn').should('have.class', 'hero-descriptor_btn btn btn-primary')
    })

    context ('Footer checks', () => {
        const facebook = 'https://www.facebook.com/Hillel.IT.School'
        const telegram = 'https://t.me/ithillel_kyiv'
        const youtube = 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1'
        const instagram = 'https://www.instagram.com/hillel_itschool/'
        const linkedIn = 'https://www.linkedin.com/school/ithillel/'
        const hillelHome = 'https://ithillel.ua'
        const hillelSupport = 'mailto:developer@ithillel.ua'

        it ('Facebook button exists', () => {
            cy.get('[href="https://www.facebook.com/Hillel.IT.School"]')
            .should('have.attr', 'href', facebook)
        })
        it ('telegram button exists', () => {
            cy.get('[href="https://t.me/ithillel_kyiv"]')
            .should('have.attr', 'href', telegram)
        })
        it ('youtube button exists', () => {
            cy.get('[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]')
            .should('have.attr', 'href', youtube)
        })
        it ('instagram button exists', () => {
            cy.get('[href="https://www.instagram.com/hillel_itschool/"]')
            .should('have.attr', 'href', instagram)
        })
        it ('linkedIn button exists', () => {
            cy.get('[href="https://www.linkedin.com/school/ithillel/"]')
            .should('have.attr', 'href', linkedIn)
        })
        it ('hillelHome button exists', () => {
            cy.get('.display-4')
            .should('have.attr', 'href', hillelHome)
        })
        it ('hillelSupport button exists', () => {
            cy.get('.h4')
            .should('have.attr', 'href', hillelSupport)
        })
    })
})