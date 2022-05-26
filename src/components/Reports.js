import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';


function Reports() {
    return (
        <Container>
            reports
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: blue;
`;

export default withRouter(Reports);