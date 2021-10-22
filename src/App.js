import "./App.css";
// import Products from './components/Products/Products';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import { Products } from "./components";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";
import Navbar from "./components/realNavbar/Navbar";
import Cart from "./components/cart/Cart";
import Navbar2 from "./components/navbar/Navbar";
import Landing from "./components/pages/home/components/Landing";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import {
  FetchFairSkin,
  FetchMediumSkin,
  FetchDarkSkin,
} from "./components/pages/categories/Category";
// import { FairSkin, name} from "./requests"

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const addItemToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const updateItemQuantity = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const removeItemFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const EmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

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


  console.log("this is order", order);
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar2 totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
         <Landing />
            <Products products={products} onAddToCart={addItemToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={updateItemQuantity}
              handleRemoveFromCart={removeItemFromCart}
              handleEmptyCart={EmptyCart}
            />
          </Route>

          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
          
          <Route exact path="/fairskin">
          <FetchFairSkin onAddToCart={addItemToCart}/>
          </Route>
          <Route exact path="/mediumskin">
          <FetchMediumSkin/>
          </Route>
          <Route exact path="/darkskin">
          <FetchDarkSkin/>
          </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
