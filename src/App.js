import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/categories/')
    .then(res => {
      console.log(res.data)
      setData(res.data);
      setLoading(false)
    })
  }, [])
  return (
    <Container>
      <NavBar />
    </Container>
  );
}

export default App;


const Container = styled.div`
  width: 100%;
  height: 100%;
`;