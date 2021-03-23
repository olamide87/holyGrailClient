import React from 'react';
import NavBar from '../components/nav/NavBar';
// import Auth from '../components/auth';

class App extends React.Component {
  state = {
    authed: false,
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <NavBar authed={ authed } />
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">I am a button</button>
      </div>
    );
  }
}

export default App;
