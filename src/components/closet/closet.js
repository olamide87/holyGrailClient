import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';

class Closet extends React.Component {
  render() {
    const { closet } = this.props;
    const closetDetails = `/viewCloset/${closet.id}`;
    return (
      <div className="card text-center collection-card">
        <div className="card-header"><h5>{closet.name}</h5></div>
        <div className="card-body">
          <div className="btn-group" role="group">
            <Link to={closetDetails}><button className="btn btn-secondary"><i className="far fa-eye"></i></button></Link>
          </div>
        </div>
        <div className="card-footer"><button className="btn btn-danger" onClick={this.deleteCollectionEvent}>Delete Collection</button></div>
      </div>
    );
  }
}

export default withRouter(Closet);
