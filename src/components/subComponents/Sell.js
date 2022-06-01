import React from 'react';
import styled from 'styled-components';


export default function Sell(props) {
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
            <Price>
                {
                    `${props.total} $`
                }
            </Price>
            <Date>
                {
                    `${(props.date.toString()).substring(0, 10)} at ${(props.date.toString()).substring(12, 19)}`
                }
            </Date>
        </Container>
    );
}

const Price = styled.p`
    width: calc(100% / 4);
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
    width: calc(100% / 4);
`;

const Quantity = styled.p`
    width: calc(100% / 4);
    text-align: center;
`;

const Date = styled.p`
    width: calc(100% / 4);
    text-align: center;
`;