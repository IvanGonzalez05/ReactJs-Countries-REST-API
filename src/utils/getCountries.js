// function that returns all countries, countries by region, and a specific country details:
export const getAllCountries = (setCountries, setIsPending) => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(data => data.json())
    .then(json => {
        // didn't know if it was better to render all countries at once, so I selected
        // 10 of them
        setCountries([json[65], json[239], json[84], json[77], 
                    json[31], json[103], json[0], json[48], json[212], json[247]]);
    })
    .catch(error => {
        console.error(`Error fetchin all countries: ${error}`)
    });
};

export const getCountriesByRegion = (region, setCountries, setIsPending) => {
    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
    .then(data => data.json())
    .then(json => {
        setCountries(json);
        setIsPending(false);
    })
    .catch(error => {
        console.error(`Error fetchin all countries from selected region: ${error}`)
    });
};

export const getCountryDetails = (endpoint, setCountry, setIsPending) => {
    fetch(endpoint)
    .then(data => data.json())
    .then(json => {
        // creating an object with all data I need, and setting it to state
        setCountry({
            "flag": json[0].flag,
            "name": json[0].name,
            "nativeName": json[0].nativeName,
            "population": json[0].population,
            "region": json[0].region,
            "subRegion": json[0].subregion,
            "capital": json[0].capital,
            "topLevelDomain": json[0].topLevelDomain,
            "currencies": json[0].currencies.map(curr => curr.name),
            "languages": json[0].languages.map(lang => lang.name),
            "borderCountries": json[0].borders,
        })
        console.log(json)
        setIsPending(false);
    })
    .catch(error => {
        console.error(`Error getting data from the selected country: ${error}`)
    });
}