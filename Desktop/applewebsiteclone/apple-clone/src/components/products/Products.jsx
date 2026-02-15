import React from "react";
import "./Products.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/products").then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <div className="products">
      <div className="productlist">

  {
    product.map((item)=>{
      return(

              
      <div key={item.id} className="item">
  <img
    src={item.image}
    alt="Apple Product"
  />
  <p>{item.title}</p>
</div>

      )
    })
  }

        
      </div>
    </div>
  );
}

export default Products;
