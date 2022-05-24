import React, {useEffect, useState} from 'react';
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
  let count = 0;

  data.forEach(category => {
    category.data.forEach(med => {
      count += med.quantity;
    })
  })
  return (
    <div>
      {
        loading ? <p>Loading...</p> : `number of drugs is ${data[0].data.length}  quantity of all drugs is ${count}`
      }
    </div>
  );
}

export default App;
