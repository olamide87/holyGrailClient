import React from 'react';

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import './App.scss';

import { Search } from '@material-ui/icons';
import Navbar from '../components/nav/NavBar';
import Auth from '../components/auth/Auth';
import NewUser from '../components/auth/NewUser';
import Closets from '../components/closet/closets.jsx';
import LandingPage from '../components/Landingpage/landingpage';
import home from '../components/Home/home';
import productCard from '../components/product/productCard';
import SearchPage from '../components/search/searchPage';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/landingPage', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const RoutesContainer = ({ authed, authToggle }) => (
  <div>
    <Switch>
      <PrivateRoute path="/closets" component={Closets} authed={authed}/>

      <PublicRoute path='/landingPage' component={LandingPage} authed={authed}/>
      <PublicRoute path='/auth' component={Auth} authed={authed} authToggle={authToggle} />
      <PublicRoute path='/newuser' component={NewUser} authed={authed} authToggle={authToggle} />
      <PrivateRoute path='/home' component={home} authed={authed} authToggle={authToggle} />
      <PrivateRoute path='/productCard' component={productCard} authed={authed} authToggle={authToggle} />
      <PrivateRoute path='/searchPage' component={SearchPage} authed={authed} authToggle={authToggle}/>

      {/* { <Redirect from='*' to='/home' />} */}
    </Switch>
  </div>
);

class App extends React.Component {
  state = {
    authed: false,
    userData: null,
  };

  callSetState = () => {
    if (localStorage.getItem('authed') === 'true') {
      this.setState({ authed: true });
    }
  }

  constructor() {
    super();
    if (localStorage.getItem('authed') === 'true') {
      this.state = {
        authed: true,
        userData: null,
      };
    } else {
      this.state = {
        authed: false,
        userData: null,
      };
    }
  }

  authToggle = () => {
    const { authed } = this.state;
    this.setState({ authed: !authed });
  }

  render() {
    const { authed } = this.state;

    return (
      <div>
        <BrowserRouter>
          <Navbar authed={authed} authToggle={this.authToggle}/>
          <RoutesContainer authed={authed} authToggle={this.authToggle}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
