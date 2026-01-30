"use client";
import useDataFetching from "../hooks/dataFetching/useDataFetching";
import Counttry from "../components/counttry";
import { Country, useGlobalContext } from "@/context/globalContext";
import Search from "@/components/search";
import { useEffect } from "react";


export default function Home() {
  const {
          countries, 
          setCountries,
          searchTerm
        } = useGlobalContext();
  const { data, loading, error } = useDataFetching("https://restcountries.com/v3.1/all?fields=name,flags,cca2,capital,population,region,languages");

  useEffect(() => {
    if (data) {
      setCountries(data);
    }
  }, [data, setCountries]);

  const displayedCountries = searchTerm 
  ? countries.filter(c => c.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
  : countries;

  if (loading) return <div className="p-5 pulse">Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
      <section className="container mx-auto">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-5">
        {displayedCountries && displayedCountries.map((country:Country) => (
            <Counttry key={country.cca2} country={country} />
        ))}
         </ul>
      </section>

  );
}
