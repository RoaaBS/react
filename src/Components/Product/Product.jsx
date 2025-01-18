import React, { useEffect, useState } from 'react';
import './Product.css';
import './ProductD'
import { Link } from 'react-router-dom';
export default function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
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

  return (
    <div className="product-container">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title ">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <Link className="btn" to={`/product/${product.id}`}>View Details</Link>
            </div>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}
