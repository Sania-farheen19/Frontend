import React from "react";

const ProductCard = ({ product ,isAdmin,onDelete}) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        
      />

      <h3>{product.name}</h3>

      <p>Price: ₹{product.price}</p>

      <span>Stock: {product.stock}</span>
      <br />

      {isAdmin && (<button className="delete-btn" onClick={()=>onDelete(product.id)}>
Delete
      </button>)}
    </div>
  );
};

export default ProductCard;