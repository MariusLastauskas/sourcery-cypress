class DishesPage {

    visit() {
        cy.visit('/');
    }

    getSortButton(criteria) {
        return cy.get('[class="v-btn v-btn--flat theme--light"]').contains(criteria);
    }

    getListOfDishes(category) {
        return cy.get('[class="v-subheader pl-2 theme--light list-enter-to"]').contains(category).next();
    }
}

export default DishesPage;