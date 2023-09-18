import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function CustomNavbar() {
  return (
    <Navbar bg="#0A192E"  expand="lg" >
      <Container style={{marginTop: "1vw"}}>
        <Navbar.Brand as={Link} to="#" style={{ color: "#64ffda", fontWeight: "bold" }}>Riya</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav style={{ marginLeft: "auto" }}>
            <Nav.Link as={Link} to="#" style={{ color: "#ccd6f6", marginRight:"1vw" }}><span style={{color: "#64ffda", marginRight: "0.5vw"}}>01.</span>About</Nav.Link>
            <Nav.Link as={Link} to="#" style={{ color: "#ccd6f6" , marginRight:"1vw"}}><span style={{color: "#64ffda", marginRight: "0.5vw"}}>02.</span>Experience</Nav.Link>
            <Nav.Link as={Link} to="#" style={{ color: "#ccd6f6", marginRight:"1vw" }}><span style={{color: "#64ffda", marginRight: "0.5vw"}}>03.</span>My Projects</Nav.Link>
            <Nav.Link as={Link} to="#" style={{ color: "#ccd6f6" , marginRight:"1vw"}}><span style={{color: "#64ffda", marginRight: "0.5vw"}}>04.</span>Contact Me</Nav.Link>
            <Nav.Link as={Link} to="#"  ><button type="button" class="btn btn-outline" style={{color: "#64ffda",  borderColor: "#64ffda" }}>Resume</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
