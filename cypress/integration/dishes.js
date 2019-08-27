import Common from '../obj/common';
import DishesPage from '../obj/dishesPage';

const common = new Common();
const dishesPage = new DishesPage();

describe('Lunch app. Dishes order.', function() {

    beforeEach(function() {
        cy.login(true);
    })

    it('Should not be able to place order for past days', function() {
        const date = new Date();
        if (date.getDay() != 1 || date.getDay() != 7) {
            const dayName = common.getDay(date.getDay() - 1);
            dishesPage.visitDay(dayName);

            dishesPage.getFirstDish().click();
            dishesPage.getOrderButton().should('have.attr', 'disabled', 'disabled');
            dishesPage.getOrderedTooltipsIcons().first().contains('remove_shopping_cart');
        }
    })

    it('Should be able to place order for future days', function() {
        const date = new Date();
        if (date.getDay() < 5) {
            const dayName = common.getDay(date.getDay() + 1);
            dishesPage.visitDay(dayName);

            dishesPage.getFirstDish().click();
            dishesPage.getOrderButton().should('not.have.attr', 'disabled', 'disabled');
            dishesPage.getOrderedTooltipsIcons().first().contains('clear');
        }        
    })

    it('Create a new user', function() {
        const date = new Date();
        const newUserName = 'Vardas';
        const email = 'pastas@gmail.com';

        if (date.getDay() < 5) {
            const dayName = common.getDay(date.getDay() + 1);
            dishesPage.visitDay(dayName);
            dishesPage.getAddButton().click();
            dishesPage.getCreateNewUserButton().click();
            dishesPage.getNameFieldInCreateUserForm().type(newUserName);
            dishesPage.getEmailFieldInCreateUserForm().type(email);
            dishesPage.getSubmitNewUserCreationButton().click();
            dishesPage.getSearchUserField().type(newUserName);
            dishesPage.getSearchResults().contains(newUserName);
        }   
    })
})