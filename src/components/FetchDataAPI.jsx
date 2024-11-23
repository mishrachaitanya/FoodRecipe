import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

const fetchData = async () => {
    const api = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await api.json(); 
    console.log(data)
    setData(data)
  };
const FetchDataAPI = () => {
    const [apiData, setData] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, [])
    
    
  return (
    <div>
      {apiData.map((i) => (
        <div key={i.id}>
          <h3>{i.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default FetchDataAPI