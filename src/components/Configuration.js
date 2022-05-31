import axios from 'axios';
import React, {useState} from 'react';
import styled from 'styled-components';
import SectionTitle from './subComponents/SectionTitle';

export default function Configuration() {
    const [category, setCategory] = useState('');
    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true);
        const params = new URLSearchParams();
        params.append('name', category);
        axios.post('http://localhost:8080/api/categories', params, {
            headers: { 
              "Content-Type": "application/x-www-form-urlencoded",
            }})
        .then(res => {
            console.log(res.data)
        })
    }
    return (    
        <Container>
            <FirstPart>
                <SectionTitle title = 'Category' info = 'Add New Category here...'/>
                <Form onSubmit={handleSubmit}>
                    <TitleLabel>
                        Category:
                    </TitleLabel>
                    <TitleForm 
                        type='text'
                        placeholder='Category name...'
                        onChange={(e) => {setCategory(e.target.value)}}
                        value={category}
                        required
                    />
                    <Submit>
                        SUBMIT
                    </Submit>
                    {
                        show &&
                        <Sucess>Category Added !</Sucess>
                    }
                </Form>
            </FirstPart>
            <SecondPart>
                <SectionTitle title = 'Medicine' info = 'Add New Medicine here...'/>
            </SecondPart>
        </Container>
    );
};

const Sucess = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40%;
    margin-top: 30px;
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
    border: 1px solid transparent;
    border-radius: .25rem;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
`;

const Submit = styled.button`
    width: 130px;
    height: 46px;
    border: 0;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: white;
    background: #F0483E;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 15px;

    &:hover {
        background: #F1372D;
    }
`;

const TitleLabel = styled.label`
    font-weight: 400;
    font-size: 21px;
    line-height: 21px;
    color: #1D242E;
`;
const TitleForm = styled.input`
    background: #E3EBF3;
    border: 0.2px solid #1D242E;
    border-radius: 4px;
    width: 340px;
    height: 38px;
    margin-top: 30px;
    padding: 5px;
    font-size: 15px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 87%;
    margin: auto;
    margin-top: 50px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FirstPart = styled.div`
    width: 40%;
    height: 100%;

`;

const SecondPart = styled.div`
    width: 60%;
    height: 100%;
`;