/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Generos from './Generos';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';

const Home = () => {
  return <h1>Home</h1>
}

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then(response => {
      setData(response.data)
    })
  }, [])

  return (
    <Router>
      <div>
        <Header></Header>
        <Route path="/" exact component={Home}></Route>
        <Route path="/generos" component={Generos}></Route>
      </div>
    </Router>
  );
}

export default App;
