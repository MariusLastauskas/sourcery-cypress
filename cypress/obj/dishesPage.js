class DishesPage {
    visit() {
        cy.visit('/dishes');
    }

    visitDay(dayName) {
        cy.visit(`/dishes/${dayName}`);
    }

    getFirstDish() {
        return cy.get('.dish-card').first();
    }

    getOrderedSection() {
        return cy.get('[class="flex pt-1"]');
    }

    getOrderedTooltipsIcons() {
        return this.getOrderedSection().find('i');
    }

    getOrderButton() {
        return this.getOrderedSection().find('button').last();
    }

    getSortButton(criteria) {
        return cy.get('[class="v-btn v-btn--flat theme--light"]').contains(criteria);
    }

    getListOfDishes(category) {
        return cy.get('[class="v-subheader pl-2 theme--light list-enter-to"]').contains(category).next();
    }

    getAddButton() {
        return cy.get('[class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark primary"]').contains('add');
    }

    getCreateNewUserButton() {
        return cy.get('[class="v-btn v-btn--flat theme--light secondary--text"]').contains('Sukurti vartotoją');
    }

    getNameFieldInCreateUserForm() {
        return cy.get('[aria-label="Vardas ir Pavardė"]');
    }

    getEmailFieldInCreateUserForm() {
        return cy.get('[aria-label="El. pašto adresas"]');
    }

    getSubmitNewUserCreationButton() {
        return cy.get('[class="v-btn v-btn--flat theme--light primary--text"]');
    }

    getSearchUserField() {
        return cy.get('[aria-label="Paieška pagal vartotojo vardą"]');
    }

    getSearchResults() {
        return cy.get('[class="v-menu__content theme--light menuable__content__active v-autocomplete__content"]');
    }
}

export default DishesPage;