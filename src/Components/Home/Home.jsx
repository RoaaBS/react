import React from 'react';
import beauty from '../../assets/beauty.jpg';
import  { useEffect, useState } from 'react';
import './Home.css'
import '../Qutes/Qutes'
import '../Category/ProdC'
import { Link } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
  fetch('https://dummyjson.com/products?limit=4&skip=10&select=title,price,thumbnail')
.then(res => res.json())
.then((data) => {
  setProducts(data.products); 
})
.catch((error) => {
  setError(error);
});
}, []);

if (error) {
return <div>Error: {error.message}</div>;
}



const [categories, setCategories] = useState([]);

useEffect(() => {
  fetch('https://dummyjson.com/products/categories') 
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data); 
      setCategories(data.slice(0, 4));
    })
    .catch((err) => {
      setError(err);
    });
}, []);


if (error) {
  return <div>Error: {error.message}</div>;
}
  return (
    <div className='Home'> 
    <div className="overlay-content">
    <h3 className='text-capitalize text-center z-3 pt-5'>welcome to beauty app</h3>
      <img  className='z-1'src={beauty} alt="Beauty" />
      </div>
      <div className='About'>
        <h1>About Us</h1>
        <p>
          A <span className='font-bold'>Beauty Store</span> specializing in makeup and perfumes offers a diverse range of high-quality products to enhance personal style and confidence. Whether you're looking for the perfect foundation, vibrant eyeshadows, or luxurious lipsticks, a beauty store has everything to cater to your makeup needs. Alongside makeup, the store also boasts an extensive selection of perfumes from renowned brands, allowing customers to find their signature scent, whether it's a floral, woody, or fresh fragrance. With expert recommendations and top-notch customer service, these stores provide an ideal shopping experience for those who wish to look and feel their best. Whether you're preparing for a special event or simply treating yourself, a beauty store is the destination for all your cosmetic and fragrance desires.</p>
      </div>
      <div className="category-container">
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h4 className="card-title text-center">{category.name || category}</h4>
          
              <Link className="btn border-1 pt-2" to={`/Category/${category.name || category}`}>View Products</Link>


               
            
            </div>
          </div>
        ))
      ) : (
        <p>Loading categories...</p>
      )}
    </div>
      <div>
      <div className="product-container">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title ">{product.title}</h5>
              <p className="card-text">{product.price}</p>
              <Link className="btn" to={`/product/${product.id}`}>View Details</Link>
            </div>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
      </div>
    </div>
  );
}
