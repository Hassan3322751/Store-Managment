import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Price from '../../Common Componenets/Price/Price'
import classes from "./productsAdmin.module.css";
import axios from 'axios';

export default function FoodsAdminPage() {
  const [products, setProducts] = useState(null)

  useEffect(()=>{
    const getProducts = async() => {
        try {
            const response = await axios.get('http://localhost:3005/api/adminProducts')
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    getProducts()
  }, [])

  const FoodsNotFound = () => {
    if (products && products.length > 0) return;

    return (
      <Link to="/dashboard">Back to dashboard!</Link>
    );
  };

  const deleteProduct = async product => {
    const confirmed = window.confirm(`Delete product ${product.title}?`);
    if (!confirmed) return;

    try {
        const response = await axios.delete(`http://localhost:3005/api/product/${product._id}`)
        console.log(response)
        if(response.status === 200){
            toast.success(`"${product.title}" Has Been Removed!`);
        }
    } catch (error) {
        toast.error('Error in deleting product')
    }
};

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <h3>Admin Products</h3>

        <Link to="/addProduct" className={classes.add_food}>
          Add Food +
        </Link>
        <FoodsNotFound />
        {products &&
          products.map(product => (
            <div key={product._id} className={classes.list_item} 
              style={{borderRight: product.quantity < 100 ? '2px solid red' : 'none'}}>

              <img src={product.image} alt={product.title} />
              <Link style={{color: 'dimgray'}}>{product.title}</Link>
              <Price price={product.price} />
              <div className={classes.actions}>
                <Link to={'/editProduct/' + product._id} className={classes.edit}>Edit</Link>
                <Link onClick={() => deleteProduct(product)} className={classes.delete}>Delete</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
