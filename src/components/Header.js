import "../styles/header.css";
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();

    return (
        <div className="header-container">
            <h1 onClick={() => history.push('/')} className="header-title">Where in the World?</h1>
        </div>
    );
}

export default Header;