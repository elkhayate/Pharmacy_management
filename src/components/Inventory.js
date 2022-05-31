import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SectionTitle from './subComponents/SectionTitle';
import Drug from './subComponents/Drug';
import Search from '../assets/Search.png';

export default function Inventory() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState('All Categories');
    const [categories, setCategories] = useState([]);
    const [searchMed, setMed] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/categories')
        .then(res => {
            setCategories(res.data)
            console.log(res.data)
        })
        axios.get('http://localhost:8080/api/drug')
        .then(res => {
            selected === 'All Categories' 
            ? setData(res.data)
            : setData(
                res.data.filter(drug => {
                    return drug.category_name === selected;
                })
            )
            searchMed !== '' && setData(
                res.data.filter(drug => {
                    return (
                        drug.drug_name
                        .substring(0 ,searchMed.length)
                        .toLowerCase() === 
                        searchMed
                        .toLowerCase())
                    && (
                        selected !== 'All Categories' 
                        ? drug.category_name === selected
                        : true
                    );
                })
            )
            setLoading(false);
        })
    }, [selected, searchMed]);

    return (
        <Container>
            <FirstPart>
                <SectionTitle 
                    title = 'Inventory'
                    info = 'List of medicines available for sales.'
                />
                <SearchingArea>
                    <Label>
                        <SearchMedic
                            type='text'
                            value={searchMed}
                            onChange={(e) => {setMed(e.target.value)}}
                            placeholder='Search Medicine Inventory..'
                        />
                        <SearchImg src={Search} alt='search button'/>
                    </Label>
                    <CategoryChoose value={selected} onChange={(e) => setSelected(e.target.value)}>
                        <Option value='All Categories'>All categories</Option>
                        {
                            categories.map(cate => {
                                return <Option 
                                key={cate._id} 
                                value={cate.category_name}
                                >
                                    {
                                        cate.category_name
                                    }
                                </Option>
                            })
                        }
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

const Option = styled.option`
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    color: #1D242E;
`;

const Label = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

const SearchImg = styled.img`
    margin-left: -20px;
    cursor: pointer;
    margin-bottom: 0px;
`;
const SearchingArea = styled.div`
    position: absolute;
    margin: auto;
    bottom: 0;  
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

const CategoryChoose = styled.select`
    background: #FFFFFF;
    border: 0.4px solid #1D242E;
    border-radius: 4px;
    width: 217px;
    height: 38px;
    color: black;
    margin-right: -30px;
`;
const SearchMedic = styled.input`
    box-sizing: border-box;
    background: #E3EBF3;
    border: 0.2px solid #1D242E;
    border-radius: 4px;
    width: 340px;
    height: 38px;
    padding: 4px;
    font-size: 17px;
    line-height: 21px;
    margin-left: 30px;
`;


const Container = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

const FirstPart = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
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