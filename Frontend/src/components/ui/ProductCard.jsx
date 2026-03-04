import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        
      />

      <h3>{product.name}</h3>

      <p>Price: ₹{product.price}</p>

      <span>Stock: {product.stock}</span>
    </div>
  );
};

export default ProductCard;