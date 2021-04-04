import React from 'react';

import closetData from '../../data/closetData';

class Closets extends React.Component {
  state = {
    closets: [],
  }

  getClosetData = () => {
    closetData.getAllClosets()
      .then((res) => this.setState({ closets: res.data }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getClosetData();
  }

  render() {
    // const { closets } = this.state;
    // const closet = closets.map((singleCloset) => <Closet key={singleClosets.id} closet={closet} getClosetByUser={this.getClosetByUser} />);
    return (
      <div className="text-center">
        <h1 className="text-center mt-3 headline">Closet</h1>
        <div className="closet-container">
          {/* {closet} */}
        </div>
      </div>
    );
  }
}

export default Closets;
