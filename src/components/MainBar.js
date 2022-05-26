import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router, 
    Switch, 
    Route
} from "react-router-dom";
import Dashboard from './Dashboard';
import Inventory from './Inventory';
import Reports from './Reports';


export default function MainBar() {
    return(
        <Container>
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/inventory" component={Inventory} />
                    <Route exact path="/reports" component={Reports} />
                </Switch>
            </Router>
        </Container>
    );
}

const Container = styled.div`
    width: 80%;
    height: 100%;
`;