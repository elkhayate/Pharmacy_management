import React from 'react';
import styled from 'styled-components';
import DashInfo from './subComponents/DashInfo';
import SectionTitle from './subComponents/SectionTitle';
import medical from '../assets/medical.png';
import payments from '../assets/payments.png';
import warning from '../assets/warning.png';
import health from '../assets/health.png';

export default function Dashboard() {
    return (
        <Container>
            <FirstPart>
                <SectionTitle title = 'Dashboard' info = 'A quick data overview of the inventory.'/>
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

const Title = styled