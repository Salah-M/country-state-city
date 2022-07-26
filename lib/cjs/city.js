"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const city_1 = require("./assets/city");
const utils_1 = require("./utils");
// Get a list of all cities.
function getAllCities() {
    return city_1.cityList;
}
// Get a list of cities belonging to a specific state and country.
function getCitiesOfState(countryCode, stateCode) {
    if (!stateCode)
        return [];
    if (!countryCode)
        return [];
    const cities = city_1.cityList.filter((value) => {
        return value.countryCode === countryCode && value.stateCode === stateCode;
    });
    return cities.sort(utils_1.compare);
}
// Get a list of cities belonging to a specific country.
function getCitiesOfCountry(countryCode) {
    if (!countryCode)
        return [];
    const cities = city_1.cityList.filter((value) => {
        return value.countryCode === countryCode;
    });
    return cities.sort(utils_1.compare);
}
exports.default = {
    getAllCities,
    getCitiesOfState,
    getCitiesOfCountry,
};
