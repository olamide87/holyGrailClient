/* eslint-disable camelcase */
import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {
    state = {
      product_name: '',
      color: '',
      image: '',
      price: '',
      owns: '',
      closet_id: '',
    }

    changeProductNameEvent = (e) => {
      e.preventDefault();
      this.setState({ product_name: e.target.value });
    }

    changeImageEvent = (e) => {
      e.preventDefault();
      this.setState({ image: e.target.value });
    }

    changeColorEvent = (e) => {
      e.preventDefault();
      this.setState({ color: e.target.value });
    }

    changePriceEvent = (e) => {
      e.preventDefault();
      this.setState({ price: e.target.value });
    }

    changeIsOwnedEvent = (e) => {
      e.preventDefault();
      this.setState({ owns: e.target.checked });
    }

    changeClosetEvent = (e) => {
      console.log(e.target);
      e.preventDefault();
      this.setState({ closet_id: e.target.value });
    }

    saveProductEvent = (e) => {
      e.preventDefault();
      const {
        product_name, image, color, price, owns, closet_id,
      } = this.state;
      const { createProduct } = this.props;

      const newProduct = {
        product_name,
        image,
        closet_id,
        color,
        owns,
        price,
      };

      createProduct(newProduct);
    }

    render() {
      const {
        productName, image, color, price, owns, closet_id,
      } = this.state;
      return (
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
              value={closet_id}
              onChange={this.changeClosetEvent}>
                <option value="0">Select Closet</option>
                <option value="1">Shoes</option>
                <option value="2">Clothes</option>
                <option value="3">Accessories</option>
              </select>
          </div>

          <button className="btn btn-dark" onClick={this.saveProductEvent}>Save Product</button>
        </form>
      );
    }
}

export default withRouter(ProductForm);
