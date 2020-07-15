import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {
    Container,
    PageHeader,
    PageBody
} from './style';

import Header from '../components/Header';
import Home from '../pages/Home';

export default () => {
    return (
        <BrowserRouter>
            <Container>
            <PageHeader>
                <Header/>
            </PageHeader>
            <PageBody>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
            </PageBody>
        </Container>
        </BrowserRouter>
    );
}