import React from 'react';
import { withRouter } from 'react-router';
// import ProductList from './productList';
import productData from '../../data/productData';
import NewProduct from '../product/newProduct';

class SearchPage extends React.Component {
 state = {
   product: [],
   searchTerm: '',
 }

   getSearchProducts = (e) => {
     e.preventDefault();
     productData.getSearch(e.target.value)
       .then((response) => response.json())
       .then((data) => {
         this.setState({ searchTerm: e.target.value });
       });
   };

  productSearch = (e) => {
    const { searchTerm } = this.state;
    e.preventDefault();
    productData.getSearch(searchTerm)
      .then((product) => this.setState({ product }))
      .catch((err) => console.error(err));
  }

  render() {
    const { product } = this.state;
    const productCards = product.map((singleProduct) => <NewProduct key={product.id} product={product} />);
    return (
        <div className="new">
        <h1 className="headline">Product Search</h1>
        <form className="col-6 offset-3">
        <input
          className="form-control mr-sm-2"
          type="search"
            id="searchTerm"
            placeholder="Enter Product Title"
         onChange={this.getSearchProducts} />
         <button className="btn btn-warning search-button" onClick={this.productSearch}>Search</button>
          </form>
          <div className="search-results">
            {productCards}
          </div>
        {/* <ProductList productList={ProductList}/> */}
        </div>
    );
  }
}

export default withRouter(SearchPage);
