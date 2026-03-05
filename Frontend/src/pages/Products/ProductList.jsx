import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../services/productServices";
import ProductCard from "../../components/ui/ProductCard";
import "../../style/productList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = getProducts();
    setProducts(storedProducts);
  }, []);

  return (
    <div className="product-list-page">
      <div className="product-header">
        <h1>Products</h1>
        <button className="add-btn" onClick={() => navigate("/products/add")}>
          + Add Products
        </button>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
