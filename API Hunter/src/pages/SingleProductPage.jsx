import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleProductPage = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const Description = async () => {
    try {
      const response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`);
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Description();
  }, [id]);

  return (
    <div>
      <div className='Card' key={data.id}>
        <h2 data-testid="product-brand">{data.brand}</h2>
        <img src={data.img} alt="" data-testid="product-image" height={400} width={400} />
        <h3 data-testid="product-category">Category: {data.category}</h3>
        <h4 data-testid="product-price">Price: {data.price}</h4>
        <h4 data-testid="product-details">Details: {data.details}</h4>
      </div>
      { }
      <button onClick={() => navigate('/Dashboard')} className='back-btn'> ⬅️ Back </button>
    </div>
  );
};

export default SingleProductPage;
