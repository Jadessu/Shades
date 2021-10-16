import './App.css';
// import Products from './components/Products/Products';
import { Products, Navbar} from "./components"
import { commerce } from "./lib/commerce"
import { useState, useEffect} from "react"

function App() {
  const [products, setProducts] = useState([])
  return (
    <div className="App">
     <Products/>
    </div>
  );
}

export default App;
