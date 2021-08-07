import { NavLink } from 'react-router-dom';

const DetailsBody = ({flag, name, nativeName, population, region, 
                subRegion, capital, topLevelDomain, currencies, languages, borders}) => {
    return (
        <div className="details-container">
            <img src={flag} alt={`${name} flag`} className="flag-details"/>
            <div className="details">
                <h2 className="country-name">{name}</h2>
                <div className="main-details">
                    <p className="nativeName"><span className="bold-text">Native Name:</span> {nativeName}</p>
                    <p className="population"><span className="bold-text">Population:</span> {population}</p>
                    <p className="region"><span className="bold-text">Region:</span> {region}</p>
                    <p className="sub-region"><span className="bold-text">Sub Region:</span> {subRegion}</p>
                    <p className="capital"><span className="bold-text">Capital:</span> {capital}</p>
                </div>
                <div className="sub-details">
                    <p className="top-level-domain"><span className="bold-text">Top Level Domain:</span> {topLevelDomain}</p>
                    <p className="currencies"><span className="bold-text">Currencies:</span> {currencies}</p>
                    {
                        languages.map((language, index) => (
                            <p className="languages" key={index} ><span className="bold-text">Languages:</span> {language}</p>
                        ))
                    }
                </div>
                <div className="border-countries">
                    <h3 className="borders-title">Border Countries: </h3>
                    <div className="border-list">
                    {
                        borders.map((border, index) => (
                            <NavLink className="border-link" key={index} to={`/details/${border}`}>{border}</NavLink>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsBody;