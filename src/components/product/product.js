// build product card
// export product card

import React from 'react';
import { withRouter } from 'react-router-dom';
import productData from '../../data/productData';

class Product extends React.Component {
  state = {
    product: [],

  }

  getProductData = () => {
    productData.getProductByClosetId()
      .then((res) => this.setState({ product: res.data }))
      .then((err) => console.error(err));
  }

  componentDidMount() {
    productData.getProductByClosetId();
  }

  render() {
    return (
      <div className="card">
        {/* <img className="card-img-top" src={product.image} alt={product.name} /> */}
        <h5 className="card-title"></h5>
        <div className="card-footer">
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
