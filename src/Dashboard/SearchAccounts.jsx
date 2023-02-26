import React, { useState } from 'react'
import { Button,Nav, Col,Navbar, Row, Card } from 'react-bootstrap'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdContacts} from 'react-icons/io'
import Datacard from './Datacard'
import Image from 'react-bootstrap/Image'
const SearchAccounts = () => {
   const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
<Navbar>
<Nav style={{width:"70%"}}><Nav.Link>Friends</Nav.Link></Nav>
<Nav>
<Nav.Link><AiOutlineSearch size={25}/> </Nav.Link>

</Nav>
  <Nav>
   <Nav.Link>  <Button variant='success'>AddNew</Button></Nav.Link>
        
  </Nav>
    </Navbar>
    <Card>
   {Datacard.map((d,i)=>{
    return(
    <Row key={i}
    onClick={()=>{handleClick(d)}}
   style={{
    backgroundColor: selectedItem === d ? "yellow" : "white"
  }}
    >
   <Col xs={1}>
    <Image
        src=
        "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
        style={{background:"green",width:"25px"}} roundedCircle/></Col>
        <Col 
        >{d.prf} </Col>
        <Col xs={3}><Button variant='light'
        onClick={()=>{handleClick(d)}}
        style={{
         opacity: selectedItem === d ? "2" : "0"
       }}
        >{d.role} </Button></Col>
        <Col xs={1}><IoMdContacts/></Col>
        </Row>
    
    )
   })}



    </Card>
    
    
    
    
    </>
  )
}

export default SearchAccounts