const WishList = ({ wishList }) => {
    return (
        <div className="text-center">
            <h2 className="font-bold text-3xl border-b-2 pb-3">Wish List: {wishList.length}</h2>
            <div>
                {
                    wishList.map(country => <div key={country.cca3} className="flex justify-between items-center px-3 my-3">
                        <p className="font-medium">{country.name.common}</p>
                        <img className="w-10" src={country.flags.png} />
                    </div>)
                }
            </div>
        </div>
    );
};

export default WishList;