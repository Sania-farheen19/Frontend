import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product ,isAdmin,onDelete}) => {

  const navigate = useNavigate()
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

      {isAdmin && (

        <div className="btn-div">
          <button className="edit-btn" onClick={() => navigate(`/products/edit/${product.id}`)} >Edit</button>
        
        <button className="delete-btn" onClick={()=>onDelete(product.id)}>
Delete
      </button>
          </div>)}
    </div>
  );
};

export default ProductCard;