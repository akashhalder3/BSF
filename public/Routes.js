import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components

import Home from './components/Home/Home';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import SearchPersonnelPage from './components/SearchPersonnel/SearchPersonnelPage';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/Home/Home' component={Home} />
            <Route exact path='/CheckoutPage/CheckoutPage' component={CheckoutPage} />
            <Route exact path='/SearchPersonnelPage/SearchPersonnelPage' component={SearchPersonnelPage} />
        </Switch>
    )
}

export default Routes;