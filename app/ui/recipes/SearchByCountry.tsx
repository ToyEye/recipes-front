"use client";

import { getCountries } from "@/app/apiServise/countryAPI";
import { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";

type Props = {
  findCountry: (args: string) => void;
};

const SearchByCountry = ({ findCountry }: Props) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      setLoading(true);
      try {
        const countries = await getCountries();
        setCountries(countries);
      } catch (error) {
        console.log((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    data();
  }, []);

  const handleCountryChange = (
    newValue: SingleValue<{ value: string; label: string }>
  ) => {
    if (newValue && "value" in newValue) {
      findCountry(newValue.value as "string");
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
          options={countries.map(({ country }: { country: string }) => {
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
