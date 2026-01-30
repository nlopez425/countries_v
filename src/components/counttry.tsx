import Image from "next/image";
import { useGlobalContext, Country } from "@/context/globalContext";

export default function Counttry({ country }: { country: Country }) {
  const {selectedCountry,setSelectedCountry} = useGlobalContext();

  const handleClick = (country:Country) => {
    setSelectedCountry(country);
  };

  return (
    <li onClick={() => handleClick(country)} key={country.cca2} className="border p-4 rounded-lg text-center hover:cursor-pointer hover:bg-gray-100 transition duration-200 hover:text-black">
        <h2>{country.name.common}</h2>
        <Image className="mx-auto" src={country.flags.svg} alt={`Flag of ${country.name.common}`} width={100} height={100} />
    </li> 
  );
}