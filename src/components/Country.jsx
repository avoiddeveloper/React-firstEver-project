import { useState } from "react";

const Country = ({ country, handleAddToVisitedList, handleAddToWishList }) => {
    const { name, flags, cca3, population, area } = country;

    const [visited, setVisited] = useState(false);
    const [wishList, setWishList] = useState(false)


    const handleVisitedButton = () => {
        setVisited(!visited);
    }

    const handleWishListButton = () => {
        setWishList(!wishList);
    }
    return (
        <div className={`card shadow-xl bg-violet-100 ${visited && `bg-[#7E99A3]`} ${wishList && `bg-[#638C6D]`} `}>
            <figure className="px-10 pt-10">
                <img
                    src={flags.png}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name.common} ({cca3})</h2>
                <p className="font-semibold">{name.official}</p>
                <div className="flex flex-col justify-between items-center">
                    <p>Population: {population}</p>
                    <p>Area: {area}</p>
                </div>
                <div className="card-actions">
                    <button onClick={() => {
                        handleVisitedButton()
                        handleAddToVisitedList(country)
                    }
                    } className={'btn btn-error text-white'}>{visited ? 'Visited' : 'Will Visit Soon'}</button>

                    <button onClick={() => {
                        handleWishListButton()
                        handleAddToWishList(country)
                    }

                    } className="btn btn-error text-white">{wishList ? 'Added' : 'Add to Wish List'}</button>
                </div>
            </div>
        </div>
    );
};

export default Country;