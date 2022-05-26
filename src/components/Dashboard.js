import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';


function Dashboard() {
    return (
        <Container>
            Dashboard
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: yellow;
`;


export default withRouter(Dashboard);