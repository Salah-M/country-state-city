export interface Timezones {
    zoneName: string;
    gmtOffset: number;
    gmtOffsetName: string;
    abbreviation: string;
    tzName: string;
}

export interface ICity {
    name: string;
    countryCode: string;
    stateCode: string;
    latitude?: string | null;
    longitude?: string | null;
    getAllCities?(): ICity[];
    getCitiesOfState?(): ICity[];
    getCitiesOfCountry?(): ICity[];
}
