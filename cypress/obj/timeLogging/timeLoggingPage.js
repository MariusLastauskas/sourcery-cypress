class TimeLoggingPage {
    checkUrl() {
        cy.url().should('include', '/time-logging');
    }

    getCalendar() {
        return cy.get('.calendar');
    }

    getFormTile() {
        return cy.get('.tile.form');
    }

    getCalendarToday() {
        return cy.get('.calendar--today').find('.calendar__date');
    }
}

export default TimeLoggingPage;