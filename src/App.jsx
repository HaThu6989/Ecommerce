import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductList from './components/ProductList'
import User from './components/User'
import DarkModeToggle from "./components/DarkModeToggle";
// import { Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <DarkModeToggle/>
      {/* <Router>
        <Header/>
      </Router> */}
      {/* <Header/> */}
      <ProductList/>
      <User/>
      
    </div>
  )
}

export default App
