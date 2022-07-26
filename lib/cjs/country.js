"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const country_1 = require("./assets/country");
const utils_1 = require("./utils");
// Get a country by isoCode.
function getCountryByCode(isoCode) {
    if (!isoCode)
        return undefined;
    return utils_1.findEntryByCode(country_1.countryList, isoCode);
}
// Get a list of all countries.
function getAllCountries() {
    return country_1.countryList;
}
exports.default = {
    getCountryByCode,
    getAllCountries,
};
