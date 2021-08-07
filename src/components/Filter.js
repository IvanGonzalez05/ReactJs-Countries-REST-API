import '../styles/filter.css';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filter = () => {
    const [country, setCountry] = useState();
    const history = useHistory();

    const handleOnSubmit = () => {
        history.push(`/details/${country}`);
    };

    const byFilter = (e) => {
        history.push(`/byregion/${e.target.value}`);
    };

    return (
        <div className="filters-container">
            <form onSubmit={handleOnSubmit} method="GET" className="search-form">
                <div>
                    <FontAwesomeIcon icon={faSearch} className="search-icon"/>
                    <input type="text" name="country" className="input-country" 
                        onChange={(event) => setCountry(event.target.value)}
                        placeholder="Search for a country..." />
                </div>
            </form>
            <form className="filter-by-region">
                <select name="byRegion" className="by-region" onChange={ byFilter }>
                    <option value="filter-by-region" selected hidden>Filter by Region</option>
                    <option value="africa" >Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </form>
        </div>
    );
}

export default Filter;