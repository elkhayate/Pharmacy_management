import React, {useState} from 'react';
import styled from 'styled-components';
import Dash from '../assets/Dash.png';
import Inve from '../assets/Inve.png';
import Repo from '../assets/Repo.png';


export default function SideBar() {
    const [clicked, setClicked] = useState('dashboard');

    return (
        <Container>
            <SideSelect style={{backgroundColor: clicked === 'dashboard' && '#009099'}} onClick={() => {setClicked('dashboard')}}>
                <SideImg alt='Dashboard' src={Dash}/>
                <SideText>
                    Dashboard
                </SideText>
            </SideSelect>
            <SideSelect style={{backgroundColor: clicked === 'inventory' && '#009099'}} onClick={() => {setClicked('inventory')}}>
                <SideImg alt='Inventory' src={Inve}/>
                <SideText>
                    Inventory
                </SideText>
            </SideSelect>
            <SideSelect style={{backgroundColor: clicked === 'reports' && '#009099'}} onClick={() => {setClicked('reports')}}>
                <SideImg style={{height: '8px'}} alt='Reports' src={Repo}/>
                <SideText>
                    Reports
                </SideText>
            </SideSelect>
            <Footer>
                <SideText>
                    Copyright © 2022 elkhayate.
                </SideText>
            </Footer>
        </Container>
    )
}

const Footer = styled.div`
    height: 76px;
    margin-top: calc(100vh - 344px);
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const Container = styled.div`
    width: 20%;
    height: 100%;
    background-color: #283342;
    display: flex;
    flex-direction: column;
`;

const SideImg = styled.img`
    height: 14px;
    width: 14px;
    margin-right: 20px;
    margin-left: 20px;
`;

const SideSelect = styled.div`
    height: 76px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: start;
    align-items: center;
    align-content: center;
    cursor: pointer;
`;

const SideText = styled.h1`
    font-weight: 700;
    font-size: 19px;
    line-height: 21px;
    color: #FFFFFF;
`;