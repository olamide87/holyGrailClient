import React from 'react';
import { withRouter } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={product.image} alt={product.name} />
        <h5 className="card-title">{product.name}</h5>
        <div className="card-footer">
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
