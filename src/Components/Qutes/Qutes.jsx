import React, { useEffect, useState } from 'react';
import './Qutes.css';

export default function Quotes() {
  const [quote, setQuote] = useState(null);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())  
      .then(data => {
        setQuote(data);  
        setLoading(false);  
      })
      .catch(error => {
        setError(error);  
        setLoading(false);  
      });
  }, []);  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="ms-5 text-center">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Random Quote</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{quote?.author}</h6>
          <p className="card-text">{quote?.quote}</p>
        </div>
      </div>
    </div>
  );
}
