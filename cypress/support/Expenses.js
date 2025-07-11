
class Expenses {
    get openFuelExpenses () {
        return cy.get('[routerlink="expenses"]')
    }
    get addAnExpense () {
        return cy.get('.btn-primary')
    }
    get chooseVehicle () {
        return cy.get('#addExpenseCar')
    }
    get chooseReportDate () {
        return cy.get('#addExpenseDate')
    }
    get addMileage () {
        return cy.get('#addExpenseMileage')
    }
    get addNumberOfLiters () {
        return cy.get('#addExpenseLiters')
    }
    get addTotalCost () {
        return cy.get('#addExpenseTotalCost')
    }
    get clickAddButton () {
        return cy.get('.modal-footer > .btn-primary')
    }

    addNewExpense (vehicle, date, mileage, liters, cost) {
        this.openFuelExpenses.click()
        this.addAnExpense.click()
        this.chooseVehicle.select(vehicle)
        this.chooseReportDate.clear().type(date)
        this.addMileage.clear().type(mileage)
        this.addNumberOfLiters.type(liters)
        this.addTotalCost.type(cost)
        this.clickAddButton.click()
    }
}

export const expenses = new Expenses()