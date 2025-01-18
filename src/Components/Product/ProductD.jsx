import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductD.css'
export default function ProductD() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => setError(err));
  }, [productId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {product ? (
        <div className='product'>
          <h1>{product.title}</h1>
          <img src={product.thumbnail} alt={product.title} />
          <p>{product.description}</p>
          <p className='price'>Price: ${product.price}</p>
          <p> rating : {product.rating}</p>
          <p> stock : {product.stock}</p>
          <p>discountPercentage : {product.discountPercentage}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}
