import './App.css';
// import Products from './components/Products/Products';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Products} from "./components"
import { commerce } from "./lib/commerce"
import { useState, useEffect} from "react"
import Navbar from './components/realNavbar/Navbar';
import Cart from './components/cart/Cart';
function App() {
  const [products, setProducts] = useState([])
  const [ cart, setCart] = useState({})

  const fetchProducts = async ()=> {
    const {data} = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    setCart(cart)
  }

  const handleAddToCart = async (productId,quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  const handleUpdateCardQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity})
    setCart(response.cart)
  }

  const handleRemoveFromCart = async (productId) => {
     const response = await commerce.cart.remove(productId)
     setCart(response.cart)

  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty()
    setCart(response.cart)
  }
  
  console.log(cart)
  useEffect( () => {
fetchProducts()
fetchCart()
  }, [])

  console.log(cart.totalItems)
  
  return (
    <Router>
    <div className="App">
        
    <Navbar totalItems={cart.total_items}/>
    <Switch>
      <Route exact path = "/">
      <Products products={products} onAddToCart={handleAddToCart}/>
      </Route>
      <Route exact path = "/cart">
      <Cart cart={cart}
      handleUpdateCardQty={handleUpdateCardQty}
      handleRemoveFromCart={handleRemoveFromCart}
      handleEmptyCart={handleEmptyCart}
      />
      </Route>
      </Switch>
   
    </div>
    </Router>
  );
}

export default App;
