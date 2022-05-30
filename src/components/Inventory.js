import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SectionTitle from './subComponents/SectionTitle';
import Drug from './subComponents/Drug';
import Search from '../assets/Search.png';

export default function Inventory() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8080/api/drug')
        .then(res => {
            setData(selected === ''
            ? res.data
            : res.data.filter(drug =>  {
                return drug.category_name === selected;
            }));
            setLoading(false);
            console.log(res.data)
        })
    }, [selected]);

    return (
        <Container>
            <FirstPart>
                <SectionTitle 
                    title = 'Inventory'
                    info = 'List of medicines available for sales.'
                />
                <SearchingArea>
                    <SearchMedic
                        type='text'
                        placeholder='Search Medicine Inventory..'
                    >
                        
                    </SearchMedic>
                    <CategoryChoose>

                    </CategoryChoose>
                </SearchingArea>
            </FirstPart>
            <SecondPart>
                <InfoSecond>
                    <DrugName>
                        Medicine Name
                    </DrugName>
                    <Quantity>
                        Stock in Qty
                    </Quantity>
                    <CategoryName>
                        Category Name
                    </CategoryName>
                    <Price>
                        Selling Price
                    </Price>
                    <SellItem>
                        Sell Medicine
                    </SellItem>
                </InfoSecond>
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

const SearchImg = styled.img`

`;
const SearchingArea = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

const CategoryChoose = styled.input`

`;
const SearchMedic = styled.input`
    box-sizing: border-box;
    background: #E3EBF3;
    border: 0.2px solid #1D242E;
    border-radius: 4px;
`;


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

const InfoSecond = styled.div`
    font-weight: 800;
    font-size: 14px;
    line-height: 22px;
    color: #1D242E;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    padding: 5px;
    background-color: white;
    border-bottom: 2px solid rgba(29, 36, 46, 0.3);
`;

const DrugName = styled.p`
    width: calc(100% / 5);
`;

const Quantity = styled.p`
    width: calc(100% / 5);
    text-align: center;
`;

const CategoryName = styled.p`
    width: calc(100% / 5);
    text-align: center;
`;


const Price = styled.p`
    width: calc(100% / 5);
    text-align: center;
`;

const SellItem = styled.form`
    width: calc(100% / 5);
    text-align: center;
`;