import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Profiles from './Profiles'

const Header = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>

      <Navbar.Brand>
       Login
       </Navbar.Brand>
       
        <Nav className="me-auto">
            <Nav.Link href="#deets">Menu 1</Nav.Link>
            <Nav.Link href="#deets">Menu 1</Nav.Link>
            <Nav.Link href="#deets">Menu 1</Nav.Link>
          </Nav>
         
          <Nav>
            <Nav.Link href="#deets">M</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" >
              <Image  src=
"https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" roundedCircle 

style={{width:"43px"}}
/>
            </Nav.Link>
          </Nav>
            </Container> 
    </Navbar>
    <Profiles/>
    
    
    </>
  )
}

export default Header