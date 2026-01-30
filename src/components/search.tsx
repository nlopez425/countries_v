import React from "react";
import { useGlobalContext } from "@/context/globalContext";

export default function Search() {   
    const { searchTerm, setSearchTerm } = useGlobalContext();
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
    return (
       <div className="p-5">
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
    );
}