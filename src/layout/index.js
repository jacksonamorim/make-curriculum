import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {
    Container,
    PageHeader,
    PageBody
} from './style';

import Header from '../components/Header';
import Home from '../pages/Home';
import Curriculum from '../pages/Curriculum';

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
                    <Route exact path="/make-curriculum">
                        <Curriculum/>
                    </Route>
                </Switch>
            </PageBody>
        </Container>
        </BrowserRouter>
    );
}