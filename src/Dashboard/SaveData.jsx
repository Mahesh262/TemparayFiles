import React from 'react'
import { Navbar,Nav, Button, Container } from 'react-bootstrap'

const SaveData = () => {
  return (
    <>
    <Navbar>
      <Container fluid>

        <Nav><Navbar.Brand>My Account</Navbar.Brand></Nav>
        <Nav style={{width:"500px",padding:"20px",background:"#91eab8",display:"flex",justifyContent:"center"}}>Success Message Here</Nav>
        <Nav><Nav.Link><Button>View Buttons </Button> </Nav.Link></Nav>
        </Container>
    </Navbar>

    
    
    
    </>
  )
}

export default SaveData