
class Garage {
    get addCarButton () {
        return cy.get('.panel-page_heading > .btn')
    }
    get addCarBrand () {
        return cy.get('#addCarBrand')
    }
    get addCarModel () {
        return cy.get('#addCarModel')
    }
    get addCarMileage () {
        return cy.get('#addCarMileage')
    }
    get clickAddButton () {
        return cy.get('.modal-footer > .btn-primary')
    }

    addNewCar (brand, model, mileage) {
        this.addCarButton.click()
        this.addCarBrand.select(brand)
        this.addCarModel.select(model)
        this.addCarMileage.type(mileage)
        this.clickAddButton.click()
    }
}

export const garage = new Garage()