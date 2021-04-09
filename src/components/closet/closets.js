// I want to print closet cards for all three categories
// on the card it should show the name of the closet, image, and button to view whats inside
// I will need to import product into the closet component
// i will need to pass the props for product in the closet component
// I need to write a function that upon clicking the view detail button it will grab all the products
// Based on closet id and display them as product view
import React from 'react';

import closetData from '../../data/closetData';

class Closets extends React.Component {
  state = {
    closets: {},
  }

  getClosetData = () => {
    closetData.getAllClosets()
      .then((res) => this.setState({ closets: res.data }))
      .catch((err) => console.error(err));
  }

  // viewClosetEvent = (e) => {
  //   e.preventDefault();
  //   const {} =
  // }

  componentDidMount() {
    this.getClosetData();
  }

  render() {
    // const closet = this.state;
    return (
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">Shoes</h5>
          {/* <img className="card-img" src={garageCategory.imageUrl} alt={garageCategory.categoryName}/> */}
          <div className='btn-group' role='group'>
            <div className="btn-group" role="group">
            <button className="btn btn-success" ><i className="far fa-eye"></i></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Closets;
