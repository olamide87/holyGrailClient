import React from 'react';

import PropTypes from 'prop-types';

import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import Logout from '../Logout/Logout';

class TheNavbar extends React.Component {
static propTypes = {
  authed: PropTypes.bool,
  authToggle: PropTypes.func,
}

state = {
  isOpen: false,
}

toggle = () => {
  const { isOpen } = this.state;
  this.setState({ isOpen: !isOpen });
}

render() {
  const { isOpen } = this.state;
  const { authed, authToggle } = this.props;

  const buildNavbar = () => {
    console.log(authed);
    if (authed) {
      return (
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to='/closets'>Closets</NavLink>
          </NavItem>
          <NavItem>
            <Logout authToggle={authToggle}/>
          </NavItem>
        </Nav>
      );
    }

    return (
            <Nav/>
    );
  };
  return (

    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Holy Grail</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            {buildNavbar()}
          </Collapse>
    </Navbar>
  );
}
}

export default TheNavbar;
