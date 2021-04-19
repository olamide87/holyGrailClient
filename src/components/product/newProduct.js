import React from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import closetData from '../../data/closetData';

class NewProduct extends React.Component {
  addProduct = (e) => {
    e.preventDefault();
    const { product } = this.props;
    const newProduct = {
      product_name: product.product_name,
      color: product.color,
      image: product.image,
      price: product.price,
      owns: true,
    };
    closetData.addProduct(newProduct)
      .then()
      .catch((err) => console.error('Add Product Failed', err));
    toast.success(`${product.product_name} has been added to your closet.`, { position: toast.POSITION.TOP_CENTER });
  }

  render() {
    const { product } = this.props;
    return (
      <div className="card">
      <img className="card-img-top newProduct-image" src={product.image} alt={product.product_name}></img>
      <div className="card-footer closet-button">
        <button className="btn btn-primary" onClick={this.addProduct}>Add to Closet</button>
      </div>
    </div>
    );
  }
}

export default withRouter(NewProduct);
