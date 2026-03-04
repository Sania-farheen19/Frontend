import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/productServices";
import ProductCard from "../../components/ui/ProductCard";
import "../../style/productList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = getProducts();
    setProducts(storedProducts);
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;