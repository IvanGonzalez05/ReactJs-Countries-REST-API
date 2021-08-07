import { useHistory } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoBackButton = () => {
    const history = useHistory();

    const backHome = () => {
        history.push('/');
    };

    return (
        <div className="buttons-container">
            <button onClick={backHome} className="go-back-button">
                <FontAwesomeIcon icon={faArrowLeft} className="left-arrow"/>
                Go Back
            </button>
        </div>
    );
}

export default GoBackButton;