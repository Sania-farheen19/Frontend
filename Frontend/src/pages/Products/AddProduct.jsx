import { useState } from 'react'
import { getProducts, saveProducts } from '../../services/productServices'
import { useNavigate } from 'react-router-dom'
import "../../style/AddProduct.css"


const AddProduct = () => {
  const [formData, setFormData] = useState({
    name:"",
    price:"",
    stock:"",
    image:"",
  })

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({
      ...formData,[e.target.name]:[e.target.value],
    })

  }
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    const existingProducts = getProducts();

    const newProduct = {
      id:Date.now(),
      ...formData,
      price:Number(formData.price),
      stock:Number(formData.stock),
    }

    const updatedProducts = [
      ...existingProducts,newProduct
    ]
    saveProducts(updatedProducts);

    navigate("/products")

  }
  return (
    <div className='outer-container'>
      <div className='add-product-container'>
      <h2>
      Add Product</h2>
      <form onSubmit={handleSubmit} className='add-form'>

      <label >Product Name:</label>  <input type="text" name="name" placeholder='Product Name' required onChange={handleChange} />
       <label >Price:</label> <input  name="price" placeholder='Price' required onChange={handleChange}/>
       <label >Stock:</label> <input type="text" name="stock" placeholder='Stock' required onChange={handleChange}/>
       <label >Image URL:</label> <input type="text" name="image" placeholder='Img URL' required onChange={handleChange} />
        <button type='submit'> Add Product</button>

      </form>
      </div>
    </div>
  )
}

export default AddProduct