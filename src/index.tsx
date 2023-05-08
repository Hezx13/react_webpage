import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,    Route,
  Routes, } from 'react-router-dom'
import AnimatedRoutes from './Routes';
import App from './App';
import NavBarComponent from './modules/navbar';
import './index.css';
import { GlobalStyle } from './global_styles';
import {EntryPage, AboutPage, ContactPage, ModulesPage, PricingPage} from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import WebPage from './webpage_container';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<EntryPage/>} />
      <Route path='webpage/*' element={<WebPage/>} />
      <Route path='dashboard/*' element={<App/>}/>
      </Routes>
      </Router>
      <GlobalStyle/>    
  </React.StrictMode>
);