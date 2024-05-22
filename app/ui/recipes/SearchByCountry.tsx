"use client";

import React, { ChangeEvent } from "react";
import Select, { SingleValue } from "react-select";

import { useQuery } from "@apollo/client";

import queries from "@/graphql/queries";

type Props = {
  getCountry: (args: string) => void;
};

const SearchByCountry = ({ getCountry }: Props) => {
  const { data, loading } = useQuery(queries.GET_COUNTRIES);

  const handleCountryChange = (
    newValue: SingleValue<ChangeEvent<HTMLSelectElement>>
  ) => {
    if (newValue && "value" in newValue) {
      getCountry(newValue.value as "string");
    }
  };

  return (
    <div className="flex mb-4">
      <div className="flex flex-col">
        <label className="mb-2 text-sm" htmlFor="country-filter">
          Filter by Country:
        </label>

        <Select
          isLoading={loading}
          options={data?.countries.map(({ country }: { country: string }) => {
            return {
              value: country,
              label: country,
            };
          })}
          placeholder="Select a country"
          isDisabled={loading}
          onChange={handleCountryChange}
        />
      </div>
    </div>
  );
};

export default SearchByCountry;

{
  /* <select
          id="country-filter"
          defaultValue="default"
          name="countries"
          required
          onChange={handleCountryChange}
        >
          <option className="w-48 md:w-64" disabled value="default">
            {loading ? "loading..." : "Select a country"}
          </option>
          {data?.countries &&
            data.countries
              .slice()
              .sort((a: { country: string }, b: { country: string }) =>
                a.country.localeCompare(b.country)
              )
              .map(({ id, country }: { id: string; country: string }) => {
                return <option key={id}>{country}</option>;
              })}
        </select> */
}
