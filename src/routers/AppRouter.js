import Home from '../components/Home';
import Header from '../components/Header';
import CountryDetails from '../components/CountryDetails';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="main-container">
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/details/:countryName" exact={true} component={CountryDetails}/>
                    <Route path="/byregion/:region" exact={true} component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;