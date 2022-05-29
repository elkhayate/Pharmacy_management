import React from 'react';
import styled from "styled-components";


export default function RectInfo(props) {
    return (
        <Container>
            <FirstPart>
                <FirstTitle>
                    {
                        props.title
                    }
                </FirstTitle>
            </FirstPart>
            <SecondPart>
                <SubSecond>
                    <SubTitle>
                        {
                            props.firstTitle
                        }
                    </SubTitle>
                    <SubPara>
                        {
                            props.firstPara
                        }
                    </SubPara>
                </SubSecond>
                <SubSecond>
                    <SubTitle>
                        {
                            props.secondTitle
                        }
                    </SubTitle>
                    <SubPara>
                        {
                            props.secondPara
                        }
                    </SubPara>
                </SubSecond>
            </SecondPart>
        </Container>
    );
}

const SubTitle = styled.h1`
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
`;

const SubPara = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
`;

const Container = styled.div`
    width: 576px;
    height: 180px;
    background: #FFFFFF;
    border: 1px solid rgba(29, 36, 46, 0.3);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-right: 50px;
`;

const FirstPart = styled.div`
    height: calc(100% / 3);
    width: 100%;
    border-bottom: 1px solid rgba(29, 36, 46, 0.3);
`;

const FirstTitle = styled.h1`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #1D242E;
    margin-left: 20px;
`;

const SecondPart = styled.div`
    height: calc((100% / 3) * 2);
    width: 100%;
    display: flex;

`;

const SubSecond = styled.div`
    margin-top: 10px;
    width: 50%;
    height: 100%;
    color: #1D242E;
    padding: 20px;
    padding-top: 0;
    padding-bottom: 0;
`;