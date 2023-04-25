import React, {useState, useEffect} from 'react';
import './App.css';
import "./styles.css";


import Header from './header';

import Footer from './footer';


function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // http://api.quotable.io/random

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  },[]);

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  }
  return (
    <div className="App">
    <Header title="RANDOM QUOTE GENERATOR" subtitle="A REACT PROJECT" />
         <div className="quote">
            <h2>{quote}</h2>
            <small>-{author}-</small>
            //
            <button style={{marginTop:100}}
            className="btn" onClick={fetchNewQuote}>Click here for the New Quote</button>
            //
            <a href="https://instagram.com/dhilip_kumar_v?igshid=ZDdkNTZiNTM=" target="_blank" rel="noreferrer">
              <img id="I" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png"/>
            </a>
            
            
            </div><br />
            
         
            <Footer note="DONE BY : DHILIP KUMAR V" />
    </div>
    
  );
}

export default App;



