import DishesPage from '../objects/dishesPage';
const dishesPage = new DishesPage();

describe('Sourcebooks login', function() {

    beforeEach(function() {
        cy.login(true);
        dishesPage.visit();
    })
    
    it('Sorting', function () {
        dishesPage.getSortButton('Kaina').click();
        dishesPage.getSortButton('Populiarumas').click();
        dishesPage.getSortButton('Abėcėlė').click();

    })
})