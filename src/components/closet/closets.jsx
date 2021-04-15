// I want to print closet cards for all three categories
// on the card it should show the name of the closet, image, and button to view whats inside
// I will need to import product into the closet component
// i will need to pass the props for product in the closet component
// I need to write a function that upon clicking the view detail button it will grab all the products
// Based on closet id and display them as product view
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import closetData from '../../data/closetData';

class Closets extends React.Component {
  state = {
    closets: [],
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
    const { closets } = this.state;
    const productCard = '/productCard';
    const renderedClosets = closets.map((closet) => <div className="card" >
    <div className="card-body">
      <h5 className="card-title">{closet.title}</h5>
      {/* <img className="card-img" src={closet.imageUrl} alt={closet.categoryName}/> */}
      <div className='btn-group' role='group'>
        <div className="btn-group" role="group">
          <Link to={productCard} className="btn btn-success" ><i className="far fa-eye"></i></Link>
        </div>
      </div>
    </div>
  </div>);
    return <>
      {renderedClosets.length ? renderedClosets : 'No closets to show'}
    </>;
  }
}

export default withRouter(Closets);
