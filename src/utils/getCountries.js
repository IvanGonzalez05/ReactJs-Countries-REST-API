// think about a way to make a request function that return data

// need some functions like these:

export const getAllCountries = (setCountries, setIsPending) => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(data => data.json())
    .then(json => {
        // didn't know if it was better to render all countries at once, so I selected
        // 10 of them
        setCountries([json[65], json[239], json[84], json[77], 
                    json[31], json[103], json[0], json[48], json[212], json[247]]);
        setIsPending(false);
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
                "borderCountries": json[0].borders
            })
            setIsPending(false);
        })
        .catch(error => {
            console.error(`Error getting data from the selected country: ${error}`)
        });
}


/** First 8 countries of home page
 * Dominican Republic => data[65]
 * EEUU => data[239]
 * Germany => data[84]
 * France => data[77]
 * Brazil => data[31]
 * Iceland => data[103]
 * Afghanistan => data[0]
 * China => data[48]
 */