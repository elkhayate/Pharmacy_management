import React from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.png";

export default function navBar() {
    return (
        <Nav>
            <SidePart>
                
            </SidePart>
            <mainPart>

            </mainPart>
        </Nav>
    )
}

const Nav = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

const SidePart = styled.div`
    width: 30%;
`;

const mainPart = styled.div`
    width: 70%;
`;