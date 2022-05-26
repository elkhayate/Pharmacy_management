import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';


function Inventory() {
    return (
        <Container>
            inventory
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: beige;
`;

export default withRouter(Inventory);