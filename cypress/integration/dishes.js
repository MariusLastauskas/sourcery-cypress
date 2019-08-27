import Common from '../obj/common';
import DishesPage from '../obj/dishesPage';

const common = new Common();
const dishesPage = new DishesPage();

describe('Lunch app. Dishes order.', function() {

    it('Should not be able to place order for past days', function() {
        cy.login();
        
        const date = new Date();
        if (date.getDay() != 1) {
            const dayName = common.getDay(date.getDay() - 1);
            dishesPage.visitDay(dayName);

            dishesPage.getFirstDish().click();
            dishesPage.getOrderButton().should('have.attr', 'disabled', 'disabled');
            dishesPage.getOrderedTooltipsIcons().first().contains('remove_shopping_cart');
        }
    })

    it('Should be able to place order for future days', function() {
        cy.login();

        const date = new Date();
        if (date.getDay() != 5) {
            const dayName = common.getDay(date.getDay() + 1);
            dishesPage.visitDay(dayName);

            dishesPage.getFirstDish().click();
            dishesPage.getOrderButton().should('not.have.attr', 'disabled', 'disabled');
            dishesPage.getOrderedTooltipsIcons().first().contains('clear');
        }
    })
})