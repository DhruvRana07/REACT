import React from 'react';
import ProductCard from './ProductCard';

const ProductTable = ({ ProductData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>S No</th>
          <th>Image</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          ProductData.map((el) => (
            <ProductCard
              key={el.id}
              id={el.id}
              price={el.price}
              brand={el.brand}
              details={el.details}
              category={el.category}
              image={el.img}
            />
          ))
        }
      </tbody>
    </table>
  );
};

export default ProductTable;
