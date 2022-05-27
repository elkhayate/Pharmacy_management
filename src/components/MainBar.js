import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router, 
    Routes, 
    Route
} from "react-router-dom";
import Dashboard from './Dashboard';
import Inventory from './Inventory';
import Reports from './Reports';

export default function MainBar() {
    return(
        <Container>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route  path="/dashboard"   element={<Dashboard/>} />
                    <Route  path="/inventory" element={<Inventory/>} />
                    <Route  path="/reports" element={<Reports/>} />
                </Routes>
            </Router>
        </Container>
    );
}

function Home() {
    return (
        <h1>
            home
        </h1>
    );
}

const Container = styled.div`
    width: 80%;
    height: 100%;
`;