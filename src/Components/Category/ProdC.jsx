import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProdC.css';

export default function ProdC() {
  const { categoryId } = useParams(); 
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const decodedCategoryId = decodeURIComponent(categoryId); 
  const formattedCategoryId = decodedCategoryId.toLowerCase().replace(/ /g, '-'); 
  
  useEffect(() => {
    fetch( `https://dummyjson.com/products/category/${formattedCategoryId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        setError(err);
      });
  }, [formattedCategoryId]); 

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{decodedCategoryId}</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
