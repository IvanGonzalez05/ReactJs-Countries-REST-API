import '../styles/card-country.css';
import { NavLink } from 'react-router-dom';

const CardCountry = ({ flag, name, population, region, capital}) => {
    return (
        <div className="card-country-container">
            <NavLink to={`/details/${name}`}>
                <div className="flag-container">
                    <img src={flag} alt={`${name}-flag`} className='flag-card'/>
                </div>
            </NavLink>
            <div className="country-data-container">
                <NavLink to={`/details/${name}`} className="country-name">{name}</NavLink>
                <p className="country-population"> <span className="bold-text">Population:</span> {population}</p>
                <p className="country-region"><span className="bold-text">Region:</span> {region}</p>
                <p className="country-capital"><span className="bold-text">Capital:</span>: {capital}</p>
            </div>
        </div>
    );
}

export default CardCountry;