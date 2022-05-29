import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import axios from 'axios';
import SideBar from './components/SideBar';
import MainBar from './components/MainBar';

function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/categories/')
  //   .then(res => {
  //     console.log(res.data)
  //     setData(res.data)
  //   })
  // }, [])
  
  return (
    <Container>
      <NavBar />
      <Main>
        <SideBar />
        <MainBar />
      </Main>
    </Container>
  );
}

export default App;


const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  background-color: #edf1f5;
`;