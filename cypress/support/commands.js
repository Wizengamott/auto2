Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  })
  
Cypress.Commands.add('createExpenseViaApi', (carId, expenseDetails) => {
      cy.request({
          method: 'POST',
          url: `https://qauto.forstudy.space/api/expenses`,
          body: {
              carId: carId,
              mileage: expenseDetails.mileage,
              liters: expenseDetails.liters,
              totalCost: expenseDetails.totalCost,
              reportedAt: expenseDetails.reportedAt
          },
      }).then((response) => {
          return response;
      });
  })