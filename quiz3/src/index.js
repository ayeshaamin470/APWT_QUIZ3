import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import Heroandclientandabout from './Components/Heroandclientandabout';
import CountsAndService from './Components/CountsAndService';
import CtaAndTestimoni from './Components/CtaAndTestimoni';
import PortfolioAndTeam from './Components/PortfolioAndTeam';
import PricingAndQuestion from './Components/PricingAndQuestion';
import ContactAndFooter from './Components/ContactAndFooter';

ReactDOM.render(
  <React.StrictMode>
    
    <Header/>
    <Heroandclientandabout/>
    <CountsAndService/>
    <CtaAndTestimoni/>
    <PortfolioAndTeam/>
    <PricingAndQuestion/>
    <ContactAndFooter/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
