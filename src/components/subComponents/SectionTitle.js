import React from 'react';
import styled from 'styled-components';


export default function SectionTitle(props) {
    return (
        <Container>
            <Title>
                {props.title}
            </Title>
            <Info>
                {props.info}
            </Info>
        </Container>
    );
}

const Container = styled.div`
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    margin-top: 30px;
    margin-left: 40px;
`;

const Title = styled.h1`
    font-weight: 900;
    font-size: 24px;
    line-height: 24px;
    color: #1D242E;
    margin: 0;
`;

const Info = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #1D242E;
`;