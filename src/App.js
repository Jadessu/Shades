import './App.css';
// import Products from './components/Products/Products';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Products} from "./components"
import { commerce } from "./lib/commerce"
import { useState, useEffect} from "react"
import Navbar from './components/realNavbar/Navbar';
import Cart from './components/cart/Cart';
import Navbar2 from './components/navbar/Navbar';
import Landing from './components/pages/home/components/Landing';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
// import { FairSkin, name} from "./requests"

function App() {
  const [products, setProducts] = useState([])
  const [ cart, setCart] = useState({})
  const [order, setOrder] = useState({})
  const [ errorMessage, setErrorMessage] = useState("")

  const fetchProducts = async ()=> {
    const {data} = await commerce.products.list()
    setProducts(data)
  }

 
    
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    setCart(cart)
  }

const handleAddToCart = async (productId, quantity) => {
  const item = await commerce.cart.add(productId, quantity);

  setCart(item.cart);
};

const handleUpdateCartQty = async (lineItemId, quantity) => {
  const response = await commerce.cart.update(lineItemId, { quantity });

  setCart(response.cart);
};

const handleRemoveFromCart = async (lineItemId) => {
  const response = await commerce.cart.remove(lineItemId);

  setCart(response.cart);
};

const handleEmptyCart = async () => {
  const response = await commerce.cart.empty();

  setCart(response.cart);
};

const refreshCart = async () => {
  const newCart = await commerce.cart.refresh()
  setCart(newCart)
}
const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  try {
    const incomingOrder = await commerce.checkout.capture(
      checkoutTokenId,
      newOrder
    );

    setOrder(incomingOrder);

    refreshCart();
  } catch (error) {
    setErrorMessage(error.data.error.message);
  }
};
  
  useEffect( () => {
fetchProducts()
fetchCart()

  }, [])

  console.log(cart.totalItems)
  
  return (
    <Router>
      <div className="App">
        {/* <Navbar totalItems={cart.total_items} /> */}
        <Navbar2 totalItems={cart.total_items}/>
        {/* <Landing/> */}
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          
          <Route exact path = "/checkout">
      <Checkout cart={cart}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
