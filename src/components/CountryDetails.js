import "../styles/country-details.css";
import DetailsBody from './DetailsBody';
import GoBackButton from './GoBackButton';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryDetails } from '../utils/getCountries';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState();
    const [isPending, setIsPending] = useState(true);

    // declaring and abort controller to abort the fetch on unmount component
    const abortCont = new AbortController();

    let endpoint = `https://restcountries.eu/rest/v2/name/${countryName}`;

    // if countryName has a length of 3 it means is a border. Thats why
    // I change the endpoint string based on the length of countryName
    if (countryName.length === 3){
        endpoint = `https://restcountries.eu/rest/v2/alpha?codes=${countryName}`;
    }

    useEffect(() => {
        // getting the data from the countries api
        getCountryDetails(endpoint, setCountry, setIsPending);

        // returning an unmount function that abort any process left when component unmounts
        return () => abortCont.abort();
    }, [isPending]);

    if (isPending){
        return (
            <div>Loading ...</div>
        );
    }

    return (
        <div>
            <GoBackButton />
            <DetailsBody 
                flag={country.flag}
                name={country.name}
                nativeName={country.nativeName}
                population={country.population}
                region={country.region}
                subRegion={country.subRegion}
                capital={country.capital}
                topLevelDomain={country.topLevelDomain}
                currencies={country.currencies}
                languages={country.languages}
                borders={country.borderCountries}
            />
        </div>
    );
}

export default CountryDetails;