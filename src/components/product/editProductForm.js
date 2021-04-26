import React from 'react';
import { withRouter } from 'react-router-dom';
import productData from '../../data/productData';

class updateProductForm extends React.Component {
  state = {
    product: {
      product_name: '',
      color: '',
      image: '',
      price: '',
      owns: '',
      closet_id: '',
    },
  }

  componentDidMount() {
    productData.getProductByClosetId(this.props.match.params.productId)
      .then((res) => {
        const product = res.data;
        this.setState({ product });
      })
      .catch((err) => console.error('err in get single product', err));
  }

  changeProductNameEvent = (e) => {
    e.preventDefault();
    const { product } = this.state;
    product.product_name = e.target.value;
    this.setState({ product });
  }

  changeImageEvent = (e) => {
    e.preventDefault();
    const { product } = this.state;
    product.image = e.target.value;
    this.setState({ product });
  }

  changeColorEvent = (e) => {
    e.preventDefault();
    const { product } = this.state;
    product.color = e.target.value;
    this.setState({ product });
  }

  changePriceEvent = (e) => {
    e.preventDefault();
    const { product } = this.state;
    product.price = e.target.value;
    this.setState({ product });
  }

  changeIsOwnedEvent = (e) => {
    e.preventDefault();
    const { product } = this.state;
    product.owns = e.target.value;
    this.setState({ product });
  }

  changeClosetEvent = (e) => {
    e.preventDefault();
    const { product } = this.state;
    product.closet_id = e.target.value;
    this.setState({ product });
  }

  updateProduct = (e) => {
    e.preventDefault();
    const { productId } = this.props.match.params;

    productData
      .updateProduct(productId, this.state.product)
      .then(() => {
        this.props.history.push(`/product/${productId}`);
      })
      .catch((err) => console.error('edit product broke', err));
  };

  render() {
    const {
      // eslint-disable-next-line camelcase
      productName, image, color, price, owns, closet_id,
    } = this.state.product;
    return (
    <div className="EditBirb col-12">
      <h1>Edit Birb</h1>
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter Product name"
            value={productName}
            onChange={this.changeProductNameEvent}
          />
        </div>
        <div className="form-group">
            <label htmlFor="Image">Image</label>
            <input
              type="text"
              className="form-control"
              id="Image"
              placeholder="Image"
              value={image}
              onChange={this.changeImageEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Color">Color</label>
            <input
              type="text"
              className="form-control"
              id="Color"
              placeholder="Enter Color"
              value={color}
              onChange={this.changeColorEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Price">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="Enter Price"
              value={price}
              onChange={this.changePriceEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="changeIsOwnedEvent">Do you own this product?</label>
            <input
              type="checkbox"
              className="form-control"
              id="changeIsOwnedEvent"
              placeholder="Do you own"
              value={owns}
              onChange={this.changeIsOwnedEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Closet">Closet</label>
            <select
              type="text"
              className="form-control"
              id="closet"
              placeholder="Enter Closet"
              // eslint-disable-next-line camelcase
              value={closet_id}
              onChange={this.changeClosetEvent}>
                <option value="0">Select Closet</option>
                <option value="1">Shoes</option>
                <option value="2">Clothes</option>
                <option value="3">Accessories</option>
              </select>
          </div>
          <button className="btn btn-info" onClick={this.updateProduct}>
            Update product
          </button>
          </form>
      </div>
    );
  }
}

export default withRouter(updateProductForm);
