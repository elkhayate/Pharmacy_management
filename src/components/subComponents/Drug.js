import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';



export default function Drug(props) {
    const [quantity, setQuantity] = useState(0);
    let total = quantity === 0 
    ? props.price * 1
    : props.price * quantity;

    

    const handleSubmit = () =>{
        const params = new URLSearchParams();
        params.append('name', props.name);
        params.append('price', total);
        params.append('category', props.category)
        params.append('quantity', quantity)
        axios.post('https://pharmacy-api-bice.vercel.app/api/sold', params, {
            headers: { 
              "Content-Type": "application/x-www-form-urlencoded",
            }})
        .then(res => {
            console.log(res)
        })

        setQuantity(1)
    }
    return (
        <Container>
            <DrugName>
                {
                    props.name
                }
            </DrugName>
            <Quantity>
                {
                    props.quantity
                }
            </Quantity>
            <CategoryName>
                {
                    props.category
                }
            </CategoryName>
            <Price>
                {
                    `${total} $`
                }
            </Price>
            <SellItem onSubmit={handleSubmit}>
                <SoldQuantity 
                    min="1" 
                    max="5"
                    type='number'
                    value={quantity === 0 ? undefined : quantity}
                    placeholder='Qty...'
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    required
                />
                <Submit type='submit' disabled={quantity === 0} isDisab = {quantity === 0}>
                    SELL
                </Submit>
            </SellItem>
        </Container>
    );
}

const Price = styled.p`
    width: calc(100% / 5);
    text-align: center;
`;

const Container = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #1D242E;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    padding: 5px;
    background-color: white;
    border-bottom: 0.4px solid rgba(29, 36, 46, 0.3);
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

const SellItem = styled.form`
    width: calc(100% / 5);
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const SoldQuantity = styled.input`
    width: 20%;
`;

const Submit = styled.button`
    width: 12%;
    margin-left: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    cursor: pointer;
    border: 0;
    border-radius: 4px;
    background-color: ${props => props.isDisab ? 'grey' : 'green'};
    color: white;
`;