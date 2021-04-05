import React from 'react';
import { withRouter } from 'react-router';

const ProductList = ({ productList = [] }) => (
    <>
    { productList.map((data, index) => {
      if (data) {
        return (
            <div key={data.name}>
              <h1>{data.name}</h1>
    </div>
        );
      }
      return null;
    }) }
    </>
);

export default withRouter(ProductList);
