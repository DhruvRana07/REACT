import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Description = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [id]);

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '90px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
  };

  const imageStyle = {
    maxWidth: '80%',
    height: '300px',
    borderRadius: '8px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0',
  };

  const categoryStyle = {
    fontSize: '18px',
    color: '#888',
    margin: '10px 0',
  };

  const priceStyle = {
    fontSize: '20px',
    fontWeight:'600',
    color: '#4CAF50',
    margin: '20px 0',
  };

  const descriptionStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    margin: '20px 0',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <div>
          <img src={product.image} alt={product.title} style={imageStyle} />
          <h2 style={titleStyle}>{product.title}</h2>
          <p style={categoryStyle}>Category: {product.category}</p>
          <p style={priceStyle}>$ {product.price}</p>
          <p style={descriptionStyle}>{product.description}</p>
          <button style={buttonStyle} onClick={() => navigate(-1)}>Go Back</button>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default Description;
