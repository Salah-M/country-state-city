"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateByCode = exports.getStateByCodeAndCountry = exports.getStatesOfCountry = exports.getAllStates = void 0;
const state_1 = require("./assets/state");
const utils_1 = require("./utils");
// Get a list of all states.
function getAllStates() {
    return state_1.stateList;
}
exports.getAllStates = getAllStates;
// Get a list of states belonging to a specific country.
function getStatesOfCountry(countryCode) {
    if (!countryCode)
        return [];
    const states = state_1.stateList.filter((value) => {
        return value.countryCode === countryCode;
    });
    return states.sort(utils_1.compare);
}
exports.getStatesOfCountry = getStatesOfCountry;
// Find a country by it's ISO code and the country in which it is contained.
function getStateByCodeAndCountry(stateCode, countryCode) {
    if (!stateCode)
        return undefined;
    if (!countryCode)
        return undefined;
    return utils_1.findStateByCodeAndCountryCode(state_1.stateList, stateCode, countryCode);
}
exports.getStateByCodeAndCountry = getStateByCodeAndCountry;
// to be deprecate
function getStateByCode(isoCode) {
    // eslint-disable-next-line no-console
    console.warn(`WARNING! 'getStateByCode' has been deprecated, please use the new 'getStateByCodeAndCountry' function instead!`);
    if (!isoCode)
        return undefined;
    return utils_1.findEntryByCode(state_1.stateList, isoCode);
}
exports.getStateByCode = getStateByCode;
exports.default = {
    getAllStates,
    getStatesOfCountry,
    getStateByCodeAndCountry,
    getStateByCode,
};
