/**
 * @file
 * Main class for a country
 */

import data from "./data";

class Country {
  country: ICountry | null = null;

  constructor(id: string) {
    this.country = data.find(
      ({ iso3, iso2, name, worldBankRegion, ftRegion }) =>
        [
          iso3.toLowerCase(),
          iso2.toLowerCase(),
          name.toLowerCase(),
          worldBankRegion.toLowerCase(),
          ftRegion.toLowerCase()
        ].includes(id.toLowerCase())
    );

    if (!this.country) throw new Error("Country not found");
  }

  static byIso3(code: string) {
    return (
      data.find(({ iso3 }) => code.toLowerCase() === iso3.toLowerCase()) ||
      new Error("Country not found")
    );
  }

  static byIso(code: string) {
    return (
      data.find(({ iso3 }) => code.toLowerCase() === iso3.toLowerCase()) ||
      new Error("Country not found")
    );
  }

  static byCode(code: string) {
    return (
      data.find(({ iso3 }) => code.toLowerCase() === iso3.toLowerCase()) ||
      new Error("Country not found")
    );
  }

  static byIso2(code: string) {
    return (
      data.find(({ iso2 }) => code.toLowerCase() === iso2.toLowerCase()) ||
      new Error("Country not found")
    );
  }

  static byName(identifier: string) {
    return (
      data.find(
        ({ name }) => name.toLowerCase() === identifier.toLowerCase()
      ) || new Error("Country not found")
    );
  }

  static byRegion(identifier: string) {
    return (
      data.filter(
        ({ ftRegion }) => ftRegion.toLowerCase() === identifier.toLowerCase()
      ) || new Error("Country not found")
    );
  }

  static byFTRegion(identifier: string) {
    return (
      data.filter(
        ({ ftRegion }) => ftRegion.toLowerCase() === identifier.toLowerCase()
      ) || new Error("Country not found")
    );
  }

  static byWorldBankRegion(identifier: string) {
    return (
      data.filter(
        ({ worldBankRegion }) =>
          worldBankRegion.toLowerCase() === identifier.toLowerCase()
      ) || new Error("Country not found")
    );
  }

  get iso3() {
    return this.country.iso3;
  }

  get iso() {
    return this.country.iso3;
  }

  get code() {
    return this.country.iso3;
  }

  get iso2() {
    return this.country.iso2;
  }

  get name() {
    return this.country.name;
  }

  get region() {
    return this.country.ftRegion;
  }

  get ftRegion() {
    return this.country.ftRegion;
  }

  get worldBankRegion() {
    return this.country.worldBankRegion;
  }
}

export default Country;
export { data };
export interface ICountry {
  iso3: string;
  iso2: string;
  name: string;
  worldBankRegion: string;
  ftRegion: string;
}
