/**
 * @file
 * Jest tests for Country class
 */

import Country from "./";

test("Available via constructor", () => {
  const canada = new Country("CA");
  expect(canada).toBeInstanceOf(Country);
  expect(canada.code).toBe("CAN");
  expect(canada.iso3).toBe("CAN");
  expect(canada.iso2).toBe("CA");
  expect(canada.name).toBe("Canada");
  expect(canada.region).toBe("North America");
  expect(canada.ftRegion).toBe("North America");
  expect(canada.worldBankRegion).toBe("North America");
});

test("Available via static methods", () => {
  const expected = {
    iso3: "CAN",
    iso2: "CA",
    name: "Canada",
    worldBankRegion: "North America",
    ftRegion: "North America"
  };
  const byName = Country.byName("Canada");
  const byIso3 = Country.byIso3("CAN");
  const byIso2 = Country.byIso2("CA");
  const byCode = Country.byCode("CAN");

  expect(expected).toEqual(byName);
  expect(expected).toEqual(byIso3);
  expect(expected).toEqual(byIso2);
  expect(expected).toEqual(byCode);
});
