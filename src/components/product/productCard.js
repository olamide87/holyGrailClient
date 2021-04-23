import React from 'react';
import productData from '../../data/productData';
import './productCard.scss';

class ProductCard extends React.Component {
  state = {
    product: [],
  }

  getProductData = () => {
    const { closetId } = this.state;
    console.log(this.state);
    productData.getProductByClosetId(closetId)
      .then((res) => this.setState({ product: res.data }))
      .catch((err) => console.error(err));
  }

  deleteProductEvent = (e) => {
    e.preventDefault();
    const { product, deleteProduct } = this.props;
    deleteProduct(product.id);
  }

  componentDidMount() {
    this.getProductData();
  }

  render() {
    const { product } = this.state;
    const products = product.map((singleProduct) => <div className="card-body">
          <h5 className="card-title">{singleProduct.product_name}</h5>
          <img className="card-img" src={singleProduct.image} alt={singleProduct.product_name}/>
          <p className="card-text">{singleProduct.price}</p>
          <p className="card-text">{singleProduct.color}</p>
          <button className="btn btn-danger" onClick={this.deleteProductEvent}><i class="fas fa-trash-alt"></i></button>
        </div>);
    return <>
        {products.length}
        </>;
  }
}

export default ProductCard;
