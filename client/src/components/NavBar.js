import React, { Component } from 'react'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import '../index.css';

export default class NavBar extends Component{
  render(){
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">NYC Pizza Reviews</a>
          </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Map</NavItem>

          <NavDropdown eventKey={3} title="Reviews" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Highest Rated</MenuItem>
            <MenuItem eventKey={3.2}>Near Me</MenuItem>
            <MenuItem eventKey={3.3}>Vote</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Request Fix </MenuItem>
          </NavDropdown>
        </Nav>
          <Nav pullRight>
            <NavItem eventKey={2} href="#">LOG IN</NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
