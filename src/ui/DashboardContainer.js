import React, { Component } from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';

import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from '../views/Dashboard';
import Products from '../views/Products';

export default class DashboardContainer extends Component {

    render(){

        return (
            <div className="app">
                <Header/>
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
                        <Breadcrumb />
                        <Container fluid>
                            <Switch>
                                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                                <Route path="/products" name="Products" component={Products}/>
                                <Redirect from="/" to="/dashboard"/>
                            </Switch>
                        </Container>
                    </main>
                </div>
                <Footer />
            </div>
        );
    }
}