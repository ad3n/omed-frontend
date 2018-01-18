import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import DashboardContainer from './ui/DashboardContainer';
import Login from './views/Login';

class Omed extends Component {
    render() {
        const authComponent = Login;
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" name="Login Page" component={authComponent}/>

                    <Route path="/" name="Dashboard" component={DashboardContainer}/>
                </Switch>
            </Router>
        );
    }
}

export default Omed;
