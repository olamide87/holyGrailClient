import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {
    state = {
      product_name: '',
      color: '',
      image: '',
      price: '',
      owns: '',
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
      this.setState({ owned: e.target.value });
    }

    saveProductEvent = (e) => {
      e.preventDefault();
      const {
        productName, image, color, price, owned,
      } = this.state;
      const { createProduct, closetId } = this.props;

      const newProduct = {
        productName,
        image,
        closetId,
        color,
        owned,
        price,
      };

      createProduct(newProduct);
    }

    render() {
      return (
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              placeholder="Enter Product name"
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
              onChange={this.changeColorEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Price">Color</label>
            <input
              type="text"
              className="form-control"
              id="Color"
              placeholder="Enter Price"
              onChange={this.changePriceEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="changeIsOwnedEvent">Do you own this product?</label>
            <input
              type="boolean"
              className="form-control"
              id="changeIsOwnedEvent"
              placeholder="Do you own"
              onChange={this.changeIsOwnedEvent}
            />
          </div>

          <button className="btn btn-dark" onClick={this.saveItemEvent}>Save Product</button>
        </form>
      );
    }
}

export default withRouter(ProductForm);
