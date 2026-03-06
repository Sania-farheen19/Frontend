import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getProducts } from "../../services/productServices";
import ProductCard from "../../components/ui/ProductCard";
import "../../style/productList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = getProducts();
    setProducts(storedProducts);
  }, []);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if(user?.role === "admin"){
      setIsAdmin(true);
    }
  
    
  }, [])

  const handleDelete = (id) => {

  const confirmDelete = window.confirm("Are you sure you want to delete this product?");

  if (confirmDelete) {
    const updatedProducts = deleteProduct(id);
    setProducts(updatedProducts);
  }

};
  

  return (
    <div className="product-list-page">
      <div className="product-header">
        <h1>Products</h1>
        {
          isAdmin && (
            <button className="add-btn" onClick={() => navigate("/products/add")}>
          + Add Products
        </button>
          )
        }
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}  isAdmin={isAdmin}
  onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
