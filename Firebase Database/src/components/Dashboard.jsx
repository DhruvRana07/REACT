import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedDescription, setExpandedDescription] = useState(null);
  const productsPerPage = 4;

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handleToggleDescription = (productId) => {
    setExpandedDescription(expandedDescription === productId ? null : productId);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="products">
        {currentProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-description">
              {expandedDescription === product.id
                ? product.description
                : product.description.length > 100
                ? `${product.description.substring(0, 100)}...`
                : product.description}
              {product.description.length > 100 && (
                <button 
                  className="see-more" 
                  onClick={() => handleToggleDescription(product.id)}
                >
                  {expandedDescription === product.id ? 'See less' : 'See more'}
                </button>
              )}
            </p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumbers.map(number => (
          <button 
            key={number} 
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
        <button 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
