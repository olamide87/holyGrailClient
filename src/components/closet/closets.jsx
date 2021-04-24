import React from 'react';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

import closetData from '../../data/closetData';
import productData from '../../data/productData';

import ProductForm from '../product/productForm';
// import product from '../product/product';

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

  deleteProductEvent = (productId) => {
    this.deleteProduct(productId);
  }

  createProduct = (newProduct) => {
    productData.createProduct(newProduct)
      .then(() => {
        this.getProductData();
        this.setState({ showForm: false });
      })
      .catch((err) => console.error(err));
    // toast.success(`${product.product_name} has been added to your closet!.`, { position: toast.POSITION.TOP_CENTER });
  }

  deleteProduct = (productId) => {
    console.log(productId);
    productData.deleteProduct(productId)
      .then(() => {
        const { product } = this.state;
        const productID = product.filter((products) => products.id !== productId);
        this.setState({ product: productID });
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
    const { closetId } = this.props;
    const products = product.map((singleProduct) => <div className="card-body">
      <h5 className="card-title">{singleProduct.product_name}</h5>
      <img className="car-img" src={singleProduct.image} alt={singleProduct.product_name} />
      <p className="card-text">Price:{singleProduct.price}</p>
      <p className="card-text">Color:{singleProduct.color}</p>
      <button className="btn btn-warning" onClick={this.editProductEvent}><i className="fas fa-edit"></i></button>
      <button className="btn btn-danger" onClick={() => { this.deleteProductEvent(singleProduct.id); }}><i className="fas fa-trash-alt"></i></button>
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
      {showForm ? <ProductForm closetId={closetId} createProduct={this.createProduct} /> : ''}
      <div className="product-cards">{products.length ? products : 'No Products to Show'}</div>
    </>;
  }
}

export default withRouter(Closets);
