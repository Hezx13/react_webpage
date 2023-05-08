import React, {useState} from 'react';

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

import {
    Route,
    Routes,
    useLocation
  } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import NavBarComponent from './modules/navbar';
import {
        HomePage, AboutPage, ContactPage,
        ModulesPage, PricingPage, RegisterPage,
        LoginPage, EntryPage
      } from './pages'


function AnimatedRoutes() {
    const [currentForm, setCurrentForm] = useState('login')
    const toggleForm = (formName) => {
      setCurrentForm(formName)
    }

    const location = useLocation()

    return(
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='login' element={currentForm === 'login' ? <LoginPage onFormSwitch={toggleForm}/> : <RegisterPage onFormSwitch={toggleForm}/>}/>
        <Route path="home" element={<HomePage />}/>
        <Route path="about" element={<AboutPage />}/>
        <Route path="contact" element={<ContactPage />}/>
        <Route path="modules" element={<ModulesPage />}/>
        <Route path="pricing" element={<PricingPage />}/>
      </Routes>

    </AnimatePresence>
    )
}

export default AnimatedRoutes