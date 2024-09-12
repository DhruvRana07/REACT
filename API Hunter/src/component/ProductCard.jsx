import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ category, brand, details, price, id, image }) => {
  return (
    <tr data-testid="item">
      <td>{id}</td>
      <td>
        {}
        <Link to={`/products/${id}`}>
          <img src={image} alt={`${brand}`} height={50} width={50} style={{ cursor: 'pointer' }} />
        </Link>
      </td>
      <td data-testid="brand">
        <Link to={`/products/${id}`}>{brand}</Link>
      </td>

      <td data-testid="category">{category}</td>
      <td data-testid="price">{price}</td>
    </tr>
  );
};

export default ProductCard;
