// Import cities module from cities dependency
const cities = require("cities");
let myCity = cities.zip_lookup("10016");
console.log(myCity);

const messagesModule = require("../modules/messages");
messagesModule.messages.forEach(m => console.log(m));