import React from 'react';
import { withRouter } from 'react-router-dom';
import Closet from './closet';

class Closets extends React.Component {
  state = {
    closets: [],
  }

getClosetByUser = () => {
  const user = localStorage.getProduct('user_id');
  return fetch(`http://localhost:8800/closet?user=${user}`, {
    headers: { Authorization: `Token ${localStorage.getProduct('token')}` },
  })
    .then((res) => res.json())
    .then((res) => {
      this.setState({ closets: res.results });
    });
}

componentDidMount() {
  this.getClosetByUser();
}

render() {
  const { closets } = this.state;
  const closet = closets.map((closet) => <Closet key={closet.id} closet={closet} getClosetByUser={this.getClosetByUser} />);
  return (
      <div className="text-center">
        <h1 className="text-center mt-3 headline">Closet</h1>
        <div className="closet-container">
          {closet}
        </div>
      </div>
  );
}
}

export default withRouter(Closets);
