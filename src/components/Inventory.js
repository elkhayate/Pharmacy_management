import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SectionTitle from './subComponents/SectionTitle';
import Drug from './subComponents/Drug';

export default function Inventory() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:8080/api/drug')
        .then(res => {
            setData(res.data);
            setLoading(false);
        })
        console.log(data)
    }, []);

    return (
        <Container>
            <FirstPart>
                <SectionTitle 
                    title = 'Inventory'
                    info = 'List of medicines available for sales.'
                />
            </FirstPart>
            <SecondPart>

                {
                    loading 
                    ? <p>loading...</p> 
                    : data.map(drug => {
                        return <Drug  
                            name = {drug.drug_name}
                            quantity = {drug.quantity}
                            category = {drug.category_name}
                            price = {drug.price}
                            key = {drug._id}
                        />
                    })
                }
            </SecondPart>
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

const FirstPart = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SecondPart = styled.div`
    position: absolute;
    width: 95%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    height: 700px;
    margin-left: 30px;
    bottom: 10px;
    border-radius: 5px;
`;