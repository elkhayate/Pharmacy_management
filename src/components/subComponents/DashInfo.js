import React from 'react';
import styled from 'styled-components';



export default function DashInfo(props) {
    return (
        <Container borderColor={props.borderColor} >
            <Img src={props.imgSrc}/>
            <Title>{props.title}</Title>
            <Info>{props.info}</Info>
        </Container>
    );
}

const Container = styled.div`
    height: 192px;
    width: 252px;
    border: 1px solid;
    border-color: ${props => props.borderColor};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: white;
`;

const Img = styled.img`
    height: 37px;
    width: 37px;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    color: #1D242E;
`;

const Info = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #1D242E;
`;