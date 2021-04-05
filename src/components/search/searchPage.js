// import React, { useState, useEffect } from 'react';
// import SearchBar from './searchBar';
// import ProductList from './productList';

// const SearchPage = (props) => {
//   const [input, setInput] = useState('');
//   const [productListDefault, setProductListDefault] = useState();
//   const [productList, setProductList] = useState();

//   const fetchData = async () => await fetch('https://restcountries.eu/rest/v2/all')
//     .then((response) => response.json())
//     .then((data) => {
//       setProductList(data);
//       setProductListDefault(data);
//     });

//   const updateInput = async (input) => {
//     const filtered = productListDefault.filter((product) => product.name.toLowerCase().includes(input.toLowerCase()));
//     setInput(input);
//     setProductList(filtered);
//   };

//   useEffect(() => { fetchData(); }, []);

//   return (
//       <>
//         <h1>Country List</h1>
//         <SearchBar
//          input={input}
//          onChange={updateInput}
//         />
//         <ProductList countryList={productList}/>
//       </>
//   );
// };
