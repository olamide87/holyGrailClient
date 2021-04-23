import React from 'react';
import productData from '../../data/productData';

class Home extends React.Component {
  state = {
    showForm: false,
  }

  createProduct = (newProduct) => {
    productData.createProduct(newProduct)
      .then(() => {
        this.getProductData();
        this.setState({ showForm: false });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { showForm } = this.state;
    return (
            <div>
                <button className="btn btn-warning" onClick={() => { this.setState({ showForm: !showForm }); }}><i className={showForm ? 'far fa-times-circle' : 'far fa-plus-square'}></i></button>
            </div>
    );
  }
}

export default Home;
