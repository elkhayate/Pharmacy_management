import axios from 'axios';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SectionTitle from './subComponents/SectionTitle';

const refresh = () => {
    window.location.refresh();
}

export default function Configuration() {
    const [correct, setCorrect] = useState(false);
    const [password, setPassword] = useState('')
    const [category, setCategory] = useState('');
    const [medicine, setMedicine] = useState('');
    const [price, setPrice] = useState('');
    const [choose, setChoose] = useState('');
    const [quantity, setQuantity] = useState('');
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [secondShow, setSecondShow] = useState(false)

    useEffect(() => {   
        axios.get('http://localhost:8080/api/categories')
        .then(res => {
            setData(res.data);
        })
    }, [])

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
        setTimeout(refresh(), 100);
    }

    const handlePass = async (e) => {
        e.preventDefault()
        let result = false;
        await axios.get('http://localhost:8080/api/password')
        .then(res => {
            if (password === res.data[0].passWord) {
                result = true
            }
        })
        if (result) {
            setCorrect(true);
        } else {
            setPassword('')
        }
    }
    const handleSecond = (e) => {
        e.preventDefault();
        setSecondShow(true);
        const params = new URLSearchParams();
        params.append('name', medicine);
        params.append('price', price);
        params.append('quantity', quantity);
        params.append('category', choose);
        axios.post('http://localhost:8080/api/drug', params, {
            headers: { 
              "Content-Type": "application/x-www-form-urlencoded",
            }})
        .then(res => {
            console.log(res.data)
        })
        setMedicine('')
        setPrice('')
        setQuantity('')
        setChoose('')
        setTimeout(refresh(), 100);
    }

    if (correct) {
    return (    
        <Container>
            <FirstPart>
                <SectionTitle title = 'Add New Category'/>
                <Form onSubmit={handleSubmit}>
                    <TitleLabel>
                        Name:
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
                <SectionTitle title = 'Add New Medicine'/>
                <FormMed style={{marginLeft: 0, display: 'flex'}} onSubmit={handleSecond}>
                    <SubContainer>
                        <TitleLabel>
                            Name:
                        </TitleLabel>
                        <TitleForm
                            type='text'
                            placeholder='Category name...'
                            onChange={(e) => {setMedicine(e.target.value)}}
                            value={medicine}
                            required
                        />
                    </SubContainer>
                    <SubContainer>
                        <TitleLabel>
                            Price:
                        </TitleLabel>
                        <TitleForm
                            min='1'  
                            type='number'
                            placeholder='Price value (min 1)'
                            onChange={(e) => {setPrice(e.target.value)}}
                            value={price}
                            required
                        />
                    </SubContainer>
                    <SubContainer>
                        <TitleLabel>
                            Quantity:
                        </TitleLabel>
                        <TitleForm
                            min='1' 
                            max='999'
                            type='number'
                            placeholder='Stock Qty (1- 999)'
                            onChange={(e) => {setQuantity(e.target.value)}}
                            value={quantity}
                            required
                        />
                    </SubContainer>
                    <SubContainer>
                        <TitleLabel>
                            Category:
                        </TitleLabel>
                        {
                            data.map(category => {
                                return (
                                    <RadioDiv key={category._id} >
                                        <Radio 
                                            onChange={(e) => {setChoose(e.target.value)}}
                                            type='radio'
                                            name='category'
                                            value={category.category_name}
                                            required
                                        />
                                        <RadioLabel>
                                            {
                                                category.category_name
                                            }
                                        </RadioLabel>
                                    </RadioDiv>
                                )
                            })
                        }
                    </SubContainer>
                    <Submit>
                        SUBMIT
                    </Submit>
                    {
                        secondShow &&
                        <Sucess>Category Added !</Sucess>
                    }
                </FormMed>
            </SecondPart>
        </Container>
    );
    } else {
        return (
            <Container style={{flexDirection: 'column'}}>
                <SectionTitle title='Admin Panel' info='Write your password please.'/>
                <Form onSubmit={handlePass}>
                    <TitleLabel>
                        Password
                    </TitleLabel>
                    <TitleForm 
                        type='password'
                        value={password}
                        placeholder='Password goes here..'
                        onChange={(e) => {setPassword(e.target.value)}}
                        required
                    />
                    <Submit>
                        OPEN
                    </Submit>
                </Form>
            </Container>
        );
    };      
};

const RadioDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    padding: 10px;
    padding-left: 0px;
`;

const RadioLabel = styled.label`
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
`;
const Radio = styled.input`
    cursor: pointer;
    margin-right: 10px;
`;

const FormMed = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 87%;
    margin: auto;
    margin-top: 50px;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-bottom: 30px;
    width: 42%;
`;

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