import { expenses } from '../../support/Expenses';
import { garage } from '../../support/Garage';
import dayjs from 'dayjs'

describe ('work with API', () => {
    let carID, carBrand, carModel, carMileage, expenceID, expenseDate, expenseTotalCost
    
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

    it ('Get car ID', () => {
        cy.intercept('POST', '/api/cars').as('addCarRequest')
        garage.addNewCar('Ford', 'Mondeo', '100')
        cy.wait('@addCarRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(201);

            carID = interception.response.body.data.id
            carBrand = interception.response.body.data.brand
            carModel = interception.response.body.data.model
            carMileage = interception.response.body.data.initialMileage

            cy.writeFile('cypress/fixtures/carID.json', {
                id: carID,              // спочатку додав лише перевірку по ІД, а потім по 3 завданню додавав інші параметри
                brand: carBrand,
                model: carModel,
                mileage: carMileage
            });
        });
    })

    it ('Check that car is added', () => {
        cy.fixture('carID.json').then((carData) => {
            const savedCarID = carData.id
            const savedCarBrand = carData.brand
            const savedCarModel = carData.model
            const savedCarMileage = carData.mileage

            expect(savedCarID).to.exist

            cy.request({
                method: 'GET',
                url: 'https://qauto.forstudy.space/api/cars',
            }).then((response) => {
                expect(response.status).to.eq(200);

                const carsList = response.body.data;
                const foundCar = carsList.find(car => car.id === savedCarID)

                expect(foundCar.brand).to.eq(savedCarBrand)
                expect(foundCar.model).to.eq(savedCarModel)
                expect(foundCar.initialMileage).to.eq(savedCarMileage)
                });
            });
        });

    it ('Create new expense via API', () => {
            cy.fixture('carID.json').then((carData) => {
                const carId = carData.id
                const mileage = carData.mileage
                expect(carId).to.exist

                const expenseData = {
                    mileage: mileage + 78,
                    liters: 20,
                    totalCost: 750,
                    reportedAt: dayjs().format('YYYY-MM-DD')
                };

                cy.createExpenseViaApi(carId, expenseData).then((response) => {
                    expect(response.status).to.eq(200)

                    expect(response.body.data).to.have.property('id').and.to.be.a('number');
                    expect(response.body.data).to.have.property('carId', carId);
                    expect(response.body.data).to.have.property('mileage', expenseData.mileage)
                    expect(response.body.data).to.have.property('liters', expenseData.liters)
                    expect(response.body.data).to.have.property('totalCost', expenseData.totalCost)
                    expect(response.body.data).to.have.property('reportedAt').and.to.include(expenseData.reportedAt)

                    const expenseID = response.body.data.id
                    const expenseDate = response.body.data.reportedAt
                    const expenseTotalCost = response.body.data.totalCost

                    cy.writeFile('cypress/fixtures/expense.json', {
                        id: expenseID,
                        totalCost: expenseTotalCost,
                        reportedAt: expenseDate           
                    });
                });  
            });
        });  
        
        it ('Check that car and expence are added', () => {
            cy.fixture('carID.json').then((data) => {
                carBrand = data.brand
                carModel = data.model
                return cy.fixture('expense.json')
              }).then((expenseData) => {
                const totalCost = expenseData.totalCost
                const reportedAt = expenseData.reportedAt

                cy.get(':nth-child(1) > app-car > .car').should('contain', carBrand, carModel)
                cy.get('[routerlink="expenses"]').click()
                cy.get('.col-lg-9').should('contain', totalCost, reportedAt)
              })
        })
