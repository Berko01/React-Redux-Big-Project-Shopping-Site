import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';

import CartSummary from '../cart/CartSummary';

import Link from 'react-router-dom/Link';

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Beko Shop</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <NavLink href="/products">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/saveproduct">Add Product</NavLink>
              </NavItem>
              <CartSummary></CartSummary>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}