import React, { useEffect, useState } from 'react';
import './Category.css'
import './ProdC';
import { Link } from 'react-router-dom';
export default function Category() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

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
        setCategories(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="category-container">
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h4 className="card-title text-center">{category.name || category}</h4>
              <Link
  className="btn border-1 pt-2"
  to={`/Category/${category.name || category}`}
>
  View Products
</Link>
            </div>
          </div>
        ))
      ) : (
        <p>Loading categories...</p>
      )}
    </div>
  );
}
