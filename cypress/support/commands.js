const credentials = require("../helpers/credentials")

Cypress.Commands.add('login', (asAdmin) => {
    if (asAdmin) {
        window.localStorage.setItem('loggedUser', `{"email":"${credentials.userEmail}","admin":true,"displayName":"${credentials.userName}","id":${credentials.userId},"jwt":"${credentials.jwt}","__typename":"LoggedUser"}`);        
    } else {
        window.localStorage.setItem('loggedUser', `{"email":"${credentials.userEmail}","admin":false,"displayName":"${credentials.userName}","id":${credentials.userId},"jwt":"${credentials.jwt}","__typename":"LoggedUser"}`);        
    }
})