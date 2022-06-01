import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SectionTitle from './subComponents/SectionTitle';
import axios from 'axios';
import Sell from './subComponents/Sell';

export default function Reports() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/sold')
        .then(res => {
            setData(res.data);
        })
    }, [])
    return (
        <Container>
            <SectionTitle title='Reports' info='Infos about selling products and revunue' />
            <SellInfo>
                <InfoBlock>
                    Name
                </InfoBlock>
                <InfoBlock>
                    Quantity
                </InfoBlock>
                <InfoBlock>
                    Price
                </InfoBlock>
                <InfoBlock>
                    Date
                </InfoBlock>
            </SellInfo>
            <Selling>
                {
                    data.map(sold => {
                        return <Sell 
                            name = {sold.drug_name}
                            quantity = {sold.quantity}
                            total = {sold.price}
                            date = {sold.date}
                            key = {sold._id}
                        />
                    })
                }
            </Selling>
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Selling = styled.div`
    width: 95%;
    border-radius: 5px;
    margin: auto;
    max-height: 700px;
    overflow: scroll;
    background-color: white;
    margin-top: 0;
`;

const InfoBlock = styled.div`
    width: 25%;
    text-align: center;
`;

const SellInfo = styled.div`
    width: 95%;
    height: 60px;
    margin: auto;
    background-color: white;
    margin-bottom: 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
`;
