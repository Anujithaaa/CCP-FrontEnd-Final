import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import axios from "axios";
import { withRouter } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const users = () => {

    const styles = {
        section: {
          fontSize: "18px",
          color: "#292b2c",
          backgroundColor: "#fff",
          padding: "0 20px"
        },
        wrapper: {
          textAlign: "center",
          margin: "0 auto",
          marginTop: "50px"
        }
      }


        
  return (
    
          <div class="container" >
            <br></br>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/admin">Admin Panel</Nav.Link>
            <NavDropdown title="Dashboard Items" id="collasible-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item> */}
              <NavDropdown.Item href="customers">
                Customers
              </NavDropdown.Item>
              <NavDropdown.Item href="itemsold">
                Item Sold
              </NavDropdown.Item>
              <NavDropdown.Item href="orders">
                Orders
              </NavDropdown.Item>
              <NavDropdown.Item href="products">
                Products
              </NavDropdown.Item>
              <NavDropdown.Item href="users">
                Users
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="admin">
                Admin Panel
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
            </Navbar>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="row" style={{display:""}}>
              HI Chats  
              {/* <div className="column" style={{float:"right", flex:"50%", padding:close"10px", height:"300px", background:"gray"}}>
                   QR
              </div> */}


            </div>
            
          </div>
    

  )
}

export default users;