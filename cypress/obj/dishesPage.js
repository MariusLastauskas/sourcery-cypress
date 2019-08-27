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
}

export default DishesPage;