import './App.css';
// import Products from './components/Products/Products';
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Products} from "./components"
import { commerce } from "./lib/commerce"
import { useState, useEffect} from "react"
import Navbar from './components/realNavbar/Navbar';
function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async ()=> {
    const {data} = await commerce.products.list()
    setProducts(data)
    console.log(data)
  }

  useEffect( () => {
fetchProducts()
  }, [])
  
  return (
    <div className="App">
    
        
    <Navbar/>
      <Products products={products}/>
   
    </div>
  );
}

export default App;
