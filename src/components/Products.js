import React from "react";
import "../styles/Products.css";
import Button from "./Button";
import ProductImage from "../assets/academy.webp";

const Products = () => {
  return (
    <div className="products" id="productspage">
      <h2 className="heading">Our Products</h2>
      <p className="sub-heading">Do more with our products and services</p>

      <div className="product-item">
        <div className="product-image">
          <img src={ProductImage} alt="Product" />
        </div>
        <div className="product-description">
          <h4>Blockchain Academy</h4>
          <p>
            Africa’s premiere educational technology platform for all things
            crypto, blockchain and web3 skill development. Be a part of the
            future of the Internet with industry leading courses.
          </p>
          <Button text="Join Waitlist" />
        </div>
      </div>
    </div>
  );
};

export default Products;
