import React, { useEffect, useState } from "react";
import { getProducts, saveProducts } from "../../services/productServices";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/editProduct.css"

const EditProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
  });
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const products = getProducts();

    const foundProduct = products.find((p) => p.id === Number(id));

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  const handleChange = (e)=>{
    const {name ,value} = e.target;
    setProduct({
      ...product,[name]:value,
    })
  }
    
  const handleSubmit = (e)=>{
    e.preventDefault();
    const products = getProducts();

    const updatedProducts = products.map((p)=>p.id === Number(id) ? product :p)
    saveProducts(updatedProducts);
      navigate("/products")
  }

  return <div className="page-container"> 
      <div className="form-container">

        <h2 className="form-title">Edit Product</h2>

      <form onSubmit={handleSubmit} className="form">
        <label >Product Name:</label>

        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
         <label >Product Price:</label>

        <input
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
        />
         <label >Stock:</label>

        <input
          name="stock"
          value={product.stock}
          onChange={handleChange}
          placeholder="Stock"
        />
 <label >Image URL:</label>
        <input
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
        />

        <button className="btn" type="submit">Update Product</button>

      </form>

      </div>

    </div>
};

export default EditProduct;
