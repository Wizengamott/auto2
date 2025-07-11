
// npx cypress run --config-file cypress.config.qaauto.js --env configFile=qaauto --spec "cypress/e2e/lesson-20/lesson-20.test.js"
// npx cypress run --config-file cypress.config.qaauto2.js --env configFile=qaauto2 --spec "cypress/e2e/lesson-20/lesson-20.test.js"

import { expenses } from '../../support/Expenses';
import { garage } from '../../support/Garage';

describe('Garage and Expenses', () => {
    beforeEach(() => {
        cy.visit('', {
            auth: {
                username: 'guest',      
                password: 'welcome2qauto'
            },
        });
        cy.get('.header_right > .btn').click()
        cy.get('#signinEmail').type(Cypress.env('email'))
        cy.get('#signinPassword').type(Cypress.env('password'))
        cy.get('.modal-footer > .btn-primary').click()
        cy.contains('Garage').should('be.visible');
    });

    it('Add a car', () => {
        garage.addNewCar('Porsche', 'Panamera', '100')
        cy.contains('Porsche').should('exist');
    })

    it ('Add an expense', () => {
        expenses.addNewExpense('Porsche Panamera', '11.07.2025', '150', '20', '500')
        cy.contains('11.07.2025').should('be.visible');
    })
  })