import {useState} from 'react';
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


function WebPage() {
  const [currentForm, setCurrentForm] = useState('login')
  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  const location = useLocation()
  return(
  <AnimatePresence>
    <NavBarComponent />
    <Routes location={location} key={location.pathname}>
      <Route path='login' element={currentForm === 'login' ? <LoginPage onFormSwitch={toggleForm}/> : <RegisterPage onFormSwitch={toggleForm}/>}/>
      <Route path="/" element={<HomePage />}/>
      <Route path="about" element={<AboutPage />}/>
      <Route path="contact" element={<ContactPage />}/>
      <Route path="modules" element={<ModulesPage />}/>
      <Route path="pricing" element={<PricingPage />}/>
    </Routes>

  </AnimatePresence>
  )
}

export default WebPage
