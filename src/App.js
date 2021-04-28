import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Loading from './components/Loading/Loading';
import Tours from './components/Tours/Tours';
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours)
    } catch (error) {
      setLoading(false);
      console.log(error)
      
    };
   
    
  };

  useEffect( () => {
fetchTours();
  },[]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
<main>
  <Tours tours={tours}/>
</main>
  )
}

export default App

