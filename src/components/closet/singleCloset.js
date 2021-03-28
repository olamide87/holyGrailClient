import React from 'react';
import { withRouter } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Product from '../product/product';

class SingleCloset extends React.Component {
  state = {
    closet: {},
  }

  componentDidMount() {
    this.getClosetById();
  }

  getClosetById = () => {
    const { closetId } = this.props.match.params;
    return fetch(`http://localhost:8800/closet/${closetId}`, {
      headers: { Authorizaition: `Token ${localStorage.getProduct('token')}` },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ closet: res });
      });
  }

  render() {
    const { closet } = this.state;
    const product = closet && closet.title ? closet.title.map((title) => <Product key={product.id} product={product} closet={closet} />) : '';
    return (
      <>
      <div className="container d-flex">
        <div className="collection d-flex flex-column col-10">
          <div className="closet-header">
            <h2 className="name text-center">{closet.name}</h2>
          </div>
          <div className="closet-options d-flex justify-content-between">
          </div>
          <div className="closet">
            {product}
          </div>
        </div>
      </div>
    </>
    );
  }
}

export default withRouter(SingleCloset);
