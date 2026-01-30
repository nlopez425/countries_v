import { createContext, useState, useContext, ReactNode } from "react";

 export interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  cca2: string;
  capital: string[];
  population: number;
  region: string;
  languages: { [key: string]: string };
}

interface GlobalContextProps {
    selectedCountry: Country | null,
    setSelectedCountry: (country: Country | null) => void;
    countries: Country[];
    setCountries: (countries: Country[]) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}



const GlobalContext = createContext<GlobalContextProps | null>(null);
export function GlobalContextProvider({ children }: { children: ReactNode }) {

    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [countries, setCountries] = useState<Country[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
        <GlobalContext.Provider value={{ 
            selectedCountry, 
            setSelectedCountry, 
            countries, 
            setCountries, 
            searchTerm,
            setSearchTerm
            }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContext() {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }
    return context;
}