import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Market from './components/market/Market';
import Minting from './components/minting/Minting';
import FAQ from './components/faq/FAQ';
import Navbar from './components/navbar/components/Navbar';
import EmoSection from './components/home/components/EmoSection';



ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/minting">
                <Minting/>
            </Route>
            <Route exact path="/market">
                <Market/>
            </Route>
            <Route exact path="/faq">
                <FAQ/>
            </Route>
        </Switch>
    </BrowserRouter>
    <EmoSection align="left"/>
    <EmoSection align="right"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
