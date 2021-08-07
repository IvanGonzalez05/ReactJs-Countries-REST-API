import CardCountry from './CardCountry';
import Filter from '../components/Filter';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllCountries, getCountriesByRegion } from '../utils/getCountries';

const Home = () => {
    const [isPending, setIsPending] = useState(true);
    const [countries, setCountries] = useState();

    // declaring and abort controller to abort the fetch on unmount component
    const abortCont = new AbortController();

    const { region } = useParams();

    useEffect(() => {
        if (region !== undefined) {
            getCountriesByRegion(region, setCountries, setIsPending);
        } else {
            getAllCountries(setCountries, setIsPending);
        }

        // returning an unmount function that abort any process left when component unmounts
        return () => abortCont.abort();
    }, [region]);

    return (
        <div>
            <Filter />
            <div className="cards-list-container">
                {!isPending && countries.map((country, index) => (
                    <CardCountry
                    key={index}
                    flag={country.flag} 
                    name={country.name} 
                    population={country.population} 
                    region={country.region} 
                    capital={country.capital}/> 
                ))}
            </div>
        </div>
    );
}

export default Home;