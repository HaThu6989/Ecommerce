import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import ProductDetails from "./components/ProductDetails";
import ProductList from './components/ProductList'
import User from './components/User'
import DarkModeToggle from "./components/DarkModeToggle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/user" element={<User />} />
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
