import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getProducts } from "../../services/productServices";
import ProductCard from "../../components/ui/ProductCard";
import "../../style/productList.css";
import Pagination from "../../components/ui/Pagination";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 4;
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = getProducts();
    setProducts(storedProducts);
  }, []);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user?.role === "admin") {
      setIsAdmin(true);
    }
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (confirmDelete) {
      const updatedProducts = deleteProduct(id);
      setProducts(updatedProducts);
    }
  };
   const filteredProducts = products.filter((product) =>
     String(product.name).toLowerCase().includes(search.toLowerCase()))

  //  pagination

   const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

const currentProducts = filteredProducts.slice(
  indexOfFirstProduct,
  indexOfLastProduct
);

  return (
    <div className="product-list-page">
      <div className="product-header">
        <h1>Products</h1>
        
        <div className="product-header-items">

          <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
  setSearch(e.target.value);
  setCurrentPage(1);
}}
          className="search-input"
        />
      </div>
          {isAdmin && (
          <button className="add-product-btn" onClick={() => navigate("/products/add")}>
            + Add Products
          </button>
        )}
      </div>
      
        </div>
      <div className="product-list">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} isAdmin={isAdmin}   onDelete={handleDelete} />
          ))
        ) : (
          <p className="no-products">No products found</p>
        )}

      </div>
      <Pagination
  totalProducts={filteredProducts.length}
  productsPerPage={productsPerPage}
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
/>
    </div>
  );
};

export default ProductList;
