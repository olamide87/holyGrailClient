// I want to print closet cards for all three categories
// on the card it should show the name of the closet, image, and button to view whats inside
// I will need to import product into the closet component
// i will need to pass the props for product in the closet component
// I need to write a function that upon clicking the view detail button it will grab all the products
// Based on closet id and display them as product view
import React from 'react';
import { withRouter } from 'react-router-dom';

import closetData from '../../data/closetData';
import productData from '../../data/productData';

class Closets extends React.Component {
  state = {
    closets: [],
    product: [],
  }

  getProductData = (closetId) => {
    productData.getProductByClosetId(closetId)
      .then((res) => {
        console.log(res.data);
        this.setState({ product: res.data });
      })

      .catch((err) => console.error(err));
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
    const { closets, product } = this.state;
    const products = product.map((singleProduct) => <div className="card">
       <div className="card-body">
          <h5 className="card-title">{singleProduct.product_name}</h5>
          <img className="car-img" src={singleProduct.image} alt={singleProduct.product_name}/>
          <p className="card-text">{singleProduct.price}</p>
          <p className="card-text">{singleProduct.color}</p>
        </div>
      </div>);
    const renderedClosets = closets.map((closet) => <div className="card" >
    <div className="card-body">
      <h5 className="card-title">{closet.title}</h5>
      {/* <img className="card-img" src={closet.imageUrl} alt={closet.categoryName}/> */}
      <div className='btn-group' role='group'>
        <div className="btn-group" role="group">
          <button onClick={() => { this.getProductData(closet.id); }} className="btn btn-success" ><i className="far fa-eye"></i></button>
        </div>
      </div>
    </div>
  </div>);
    return <>
      {renderedClosets.length ? renderedClosets : 'No closets to show'}
      {products.length ? products : 'No Products to Show'}

    </>;
  }
}

export default withRouter(Closets);
