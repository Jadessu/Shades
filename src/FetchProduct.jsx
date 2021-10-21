import React from 'react'
import { Products } from "./components";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";
import Cart from "./components/cart/Cart";
import { FairSkin, name } from "./requests";

function FetchProduct({fetchUrl}) {
      const [products, setProducts] = useState([]);

      const fetchProducts = async () => {
        const { data } = fetchUrl
        setProducts(data);
      };
    return (
        <div>
            
        </div>
    )
}

export default FetchProduct
