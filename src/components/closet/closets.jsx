import React from 'react';
import { withRouter } from 'react-router-dom';

import closetData from '../../data/closetData';
import productData from '../../data/productData';

import productForm from '../product/productForm';

class Closets extends React.Component {
  state = {
    closets: [],
    product: [],
    showForm: false,
  }

  getProductData = (closetId) => {
    productData.getProductByClosetId(closetId)
      .then((res) => {
        console.log(res.data);
        this.setState({ product: res.data });
      })

      .catch((err) => console.error(err));
  }

  createProduct = (newProduct) => {
    productData.createProduct(newProduct)
      .then(() => {
        this.getProductData();
        this.setState({ showForm: false });
      })
      .catch((err) => console.error(err));
  }

  deleteProductEvent = (e) => {
    e.preventDefault();
    const { product, deleteProduct } = this.props;
    deleteProduct(product.id);
  }

  deleteProduct = (productId) => {
    closetData.deleteProduct(productId)
      .then(() => {
        this.getProductData();
      })
      .catch((err) => console.error('Delete product failed', err));
  }

  getClosetData = () => {
    closetData.getClosetByUid('1')
      .then((res) => this.setState({ closets: res.data }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getClosetData();
  }

  render() {
    const { closets, product, showForm } = this.state;
    const products = product.map((singleProduct) => <div className="card-body">
      <h5 className="card-title">{singleProduct.product_name}</h5>
      <img className="car-img" src={singleProduct.image} alt={singleProduct.product_name} />
      <p className="card-text">{singleProduct.price}</p>
      <p className="card-text">{singleProduct.color}</p>
      <button className="btn btn-danger" onClick={this.deleteProductEvent}><i class="fas fa-trash-alt"></i></button>
    </div>);
    const renderedClosets = closets.map((closet) => <div className="card-body">
      <h5 className="card-title">{closet.title}</h5>
      {/* <img className="card-img" src={closet.imageUrl} alt={closet.categoryName}/> */}
      <div className='btn-group' role='group'>
        <div className="btn-group" role="group">
          <button onClick={() => { this.getProductData(closet.id); }} className="btn btn-success" ><i className="far fa-eye"></i></button>
        </div>
      </div>
    </div>);
    return <>
      {renderedClosets.length ? renderedClosets : 'No closets to show'}
      <br />
      <button className="btn btn-warning" onClick={() => { this.setState({ showForm: !showForm }); }}><i className={showForm ? 'far fa-times-circle' : 'far fa-plus-square'}></i></button><br />
      <div className="product-cards">{products.length ? products : 'No Products to Show'}</div>
    </>;
  }
}

export default withRouter(Closets);
