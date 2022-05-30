import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import DashInfo from './subComponents/DashInfo';
import SectionTitle from './subComponents/SectionTitle';
import medical from '../assets/medical.png';
import payments from '../assets/payments.png';
import warning from '../assets/warning.png';
import health from '../assets/health.png';
import RectInfo from './subComponents/RectInfo';
import axios from 'axios';


export default function Dashboard() {
    const [drugs, setDrugs] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/categories')
        .then(res => {
            setCategories(res.data);
            console.log(categories)
        })
        axios.get('http://localhost:8080/api/drug')
        .then(res => {
            setDrugs(res.data);
            console.log(drugs)
        })
    }, [categories, drugs])
    return (
        <Container>
            <FirstPart>
                <SectionTitle 
                    title = 'Dashboard' 
                    info = 'A quick data overview of the inventory.'
                />
                <DashInfos>
                    <DashInfo 
                        borderColor = 'green' 
                        imgSrc={health} 
                        title='Good' 
                        info = 'Inventory Status' 
                    />
                    <DashInfo 
                        borderColor = 'yellow' 
                        imgSrc={payments} 
                        title='Good' 
                        info = 'Revenue' 
                    />
                    <DashInfo 
                        borderColor = 'blue' 
                        imgSrc={medical} 
                        title='298' 
                        info = 'Medicines Available' 
                    />
                    <DashInfo 
                        borderColor = 'red' 
                        imgSrc={warning} 
                        title='0' 
                        info = 'Medicine Shortage' 
                    />
                </DashInfos>
            </FirstPart>
            <SecondPart>
                <Wrapper>
                    <RectInfo 
                        title = 'Inventory'
                        firstTitle = {drugs.length}
                        firstPara = 'Total no of Medicines'
                        secondTitle = '24'
                        secondPara = 'Medicines Groups'
                    />
                    <RectInfo 
                        title = 'Inventory'
                        firstTitle = '298'
                        firstPara = 'Total no of Medicines'
                        secondTitle = '24'
                        secondPara = 'Medicines Groups'
                    />
                    <RectInfo 
                        title = 'Inventory'
                        firstTitle = '298'
                        firstPara = 'Total no of Medicines'
                        secondTitle = '24'
                        secondPara = 'Medicines Groups'
                    />
                </Wrapper>
            </SecondPart>
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    width: 100%;
`;

const FirstPart = styled.div`
    height: 400px;  
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const DashInfos = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;

const SecondPart = styled.div`
    height: calc(100vh - 460px);
    width: 100%;
    background-color: white;
`;

const Wrapper = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
