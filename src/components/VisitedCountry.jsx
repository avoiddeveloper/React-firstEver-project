const VisitedCountry = ({ visited }) => {

    return (
        <div className="text-center">
            <h2 className="font-bold text-3xl border-b-2 pb-3">Visited Country List: {visited.length}</h2>
            <div>
                {
                    visited.map(country => <div key={country.cca3} className="flex justify-between items-center px-3 my-3">
                        <p className="font-medium">{country.name.common}</p>
                        <img className="w-10" src={country.flags.png} />
                    </div>)
                }


            </div>
        </div>
    );
};

export default VisitedCountry;