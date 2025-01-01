import { useState } from "react";
import Country from "./Country";
import { useEffect } from "react";

const Countries = ({ handleAddToVisitedList, handleAddToWishList }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data));
    }, [])
    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                countries.map(country => <Country key={country.cca3} country={country} handleAddToVisitedList={handleAddToVisitedList} handleAddToWishList={handleAddToWishList}></Country>)
            }
        </div>
    );
};

export default Countries;