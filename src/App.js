import React,{useState, useEffect} from 'react';

import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Slider from './Components/Slider';
import About from './Components/About';
import Contact from './Components/Contact';
import {css} from "@emotion/react";
import PropagateLoader from 'react-spinners/PropagateLoader';
import Product from './Components/Product/Comp';

import { productData } from './Components/Product/Data';
import { Button } from 'react-scroll';

function App() {
  const[loading,setLoading]= useState(false);
  const override =css`
  display:block;
  border-color:red;
  margin-top:20%;
  `;
  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 1000);
  },[])
  return (
  
    <div className="App">
      {
               loading ? <PropagateLoader color={"#3d2514"} Loading={loading} css={override} size={40}/>                  
            :
            <>
            
        <Navbar/>
        <Header/>
        <Slider/>
        <Product heading='choose plss:' Data={productData}/>
        <About/>
        <Contact/>  
        <Button/>
       
        </> 
}
    </div>
    
  );
}
export default App;