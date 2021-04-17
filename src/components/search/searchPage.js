import React, { useState, useEffect } from 'react';
import ProductList from './productList';
import productData from '../../data/productData';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [productListDefault, setProductListDefault] = useState();
  const [productList, setProductList] = useState();

  const getSearchProducts = (e) => {
    e.preventDefault();
    productData.getSearch(e.target.value)
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
        setProductListDefault(data);
      });
  };

  return (
      <>
        <h1>Product List</h1>
        <input onChange={getSearchProducts} />
        <ProductList productList={productList}/>
      </>
  );
};
