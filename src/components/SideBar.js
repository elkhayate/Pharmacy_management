import React, {useState} from 'react';
import styled from 'styled-components';
import Dash from '../assets/Dash.png';
import Inve from '../assets/Inve.png';
import Repo from '../assets/Repo.png';
import Confi from '../assets/confi.png';

import { 
    Link,
    BrowserRouter as Router,
} from 'react-router-dom';

const refresh = () => {
    window.location.reload();
}

export default function SideBar() {
    const currentPath = window.location.href.split('/').slice(-1)[0];
    const [clicked, setClicked] = useState(currentPath ||'dashboard');
    return (
        <Container>
            <Router>
                <Link onClick={() => {setTimeout(refresh, 100)}} style={{textDecoration: 'none'}} to='/dashboard'>
                    <SideSelect 
                        style={{backgroundColor: clicked === 'dashboard' && '#009099'}} 
                        onClick={() => {setClicked('dashboard')}}>
                        <SideImg alt='Dashboard' src={Dash}/>
                        <SideText>
                            Dashboard
                        </SideText>
                    </SideSelect>
                </Link>
                <Link onClick={() => {setTimeout(refresh, 100)}} style={{textDecoration: 'none'}} to='/inventory'>
                    <SideSelect 
                        style={{backgroundColor: clicked === 'inventory' && '#009099'}} 
                        onClick={() => {setClicked('inventory')}}>
                        <SideImg alt='Inventory' src={Inve}/>
                        <SideText>
                            Inventory
                        </SideText>
                    </SideSelect>
                </Link>
                <Link onClick={() => {setTimeout(refresh, 100)}} style={{textDecoration: 'none'}} to='/reports'>
                    <SideSelect 
                        style={{backgroundColor: clicked === 'reports' && '#009099'}} 
                        onClick={() => {setClicked('reports')}}>
                        <SideImg style={{height: '8px'}} alt='Reports' src={Repo}/>
                        <SideText>
                            Reports
                        </SideText>
                    </SideSelect>
                </Link>
                <Link onClick={() => {setTimeout(refresh, 100)}} style={{textDecoration: 'none'}} to='/configuration'>
                    <SideSelect 
                        style={{backgroundColor: clicked === 'configuration' && '#009099'}} 
                        onClick={() => {setClicked('configuration')}}>
                        <SideImg alt='Configuration' src={Confi}/>
                        <SideText>
                            Configuration
                        </SideText>
                    </SideSelect>
                </Link>
                <Footer>
                    <SideText>
                        Copyright © 2022 elkhayate.
                    </SideText>
                </Footer>
            </Router>
        </Container>
    )
}

const Footer = styled.div`
    height: 76px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    bottom: 0;
    width: 100%;
`;

const Container = styled.div`
    width: 20%;
    height: 100%;
    background-color: #283342;
    display: flex;
    flex-direction: column;
    position: relative;
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