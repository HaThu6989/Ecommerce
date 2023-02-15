import './App.css'
import ProductList from './components/ProductList'
import User from './components/User'
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Header from './components/Header';


function App() {
  const [user, setUser] = useState({
    name: { first: 'John', last: 'Doe' },
    email: 'johndoe@example.com',
  });

  function handleSave(userData) {
    setUser({
      name: { first: userData.firstName, last: userData.lastName },
      email: userData.newEmail,
    });
  }


  return (
    <div className="App">
    

      
    
      <Router>

        <Header/>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/user" element={<User name={user.name} email={user.email} onSave={handleSave}/>} />

        </Routes>
      </Router>
    
    </div>
  )
}

export default App


// function App() {
//   return (
//     <div className="App">
//     <DarkModeToggle/>
//       {/* <Router>
//         <Header/>
//       </Router> */}
//       {/* <Header/> */}
//       <ProductList/>
//       <User/>
      
//     </div>
//   )
// }

// export default App
