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
    const [sold, setSold] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/categories')
        .then(res => {
            setCategories(res.data);
        })

        axios.get('http://localhost:8080/api/drug')
        .then(res => {
            setDrugs(res.data);
        })

        axios.get('http://localhost:8080/api/sold')
        .then(res => {
            setSold(res.data);
        })
    }, [])
    let total = 0;
    let shortage = 0;
    let quantity = 0;
    let allQuantity = 0;
    for (let i = 0; i < drugs.length; i++) {
        allQuantity += drugs[i].quantity;

        if (drugs[i].quantity <= 5) {
            shortage++;
            console.log(drugs[i])
        }
    }
    for (let i = 0; i < sold.length; i++) {
        quantity += sold[i].quantity;
        total += sold[i].price;
    }
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
                        title={`${total} $`} 
                        info = 'Revenue' 
                    />
                    <DashInfo 
                        borderColor = 'blue' 
                        imgSrc={medical} 
                        title={drugs.length} 
                        info = 'Medicines Available' 
                    />
                    <DashInfo 
                        borderColor = 'red' 
                        imgSrc={warning} 
                        title={shortage} 
                        info = 'Medicine Shortage' 
                    />
                </DashInfos>
            </FirstPart>
            <SecondPart>
                <Wrapper>
                    <RectInfo 
                        title = 'Inventory'
                        firstTitle = {allQuantity}
                        firstPara = 'Total Qty of Medicines'
                        secondTitle = {categories.length}
                        secondPara = 'Medicines Categories'
                    />
                    <RectInfo 
                        title = 'Quick Report'
                        firstTitle = {quantity}
                        firstPara = 'Qty of Medicines Sold'
                        secondTitle = {sold.length}
                        secondPara = 'Number of sold Medicines'
                    />
                    <RectInfo 
                        title = 'Last Transaction'
                        firstTitle = {sold.length &&  `${(sold[sold.length - 1].date.toString()).substring(0, 10)} at ${(sold[sold.length - 1].date.toString()).substring(12, 19)}`}
                        firstPara = 'Exact selling date'
                    />
                </Wrapper>
            </SecondPart>
        </Container>
    );
}
// 12-
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
