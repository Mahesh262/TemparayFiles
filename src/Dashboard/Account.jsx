import React from 'react'
import { Col, Container,Row,Form,Button, InputGroup, Card} from 'react-bootstrap'

import Image from 'react-bootstrap/Image'
import Carddetails from './Carddetails'
import {RiUserSettingsFill} from 'react-icons/ri'
const Account = () => {
  
  return (
    <>
 <Container>
<Row style={{gap:"20px"}}>
<Col xs={2} style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
<Image src=
"https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" style={{width:"70px"}} roundedCircle/>
<span>JhonSmith</span>
</Col>
{/* Forms */}
<Col xs={8}>
<Form>
<Row>
<Col>
 <Row>
<Form.Group style={{display:'flex',gap:"20px",alignItems:"center"}}>
<Form.Label>FirstName: </Form.Label>
  <Form.Control type='text' style={{width:"70%"}}/>
        </Form.Group>
        </Row> 
        <Row>
    <Form.Group style={{display:'flex', gap:"20px",alignItems:"center"}}>
  <Form.Label>LastName:</Form.Label>
  <Form.Control type="text" style={{width:"70%"}}/>
    </Form.Group>
    </Row>
    <Row>
  <Form.Group style={{display:'flex',gap:"51px",alignItems:"center"}}>
<Form.Label>Email:</Form.Label>
<Form.Control type="email" style={{width:"70%"}}/>
  </Form.Group>
  </Row>

    </Col>
    <Col>
    <Row>
<Form.Group style={{display:'flex',gap:"69px"}}>
<Form.Label>Contact:</Form.Label>
<Form.Control type='number' style={{width:"60%"}}/>
</Form.Group>
</Row>
<Row>
<Form.Group style={{display:'flex',gap:'10px'}}>
    <Form.Label>Graduation Year:</Form.Label>
    <Form.Control type='year' style={{width:"60%"}}/>
</Form.Group>
</Row>

<Row>
<Form.Group style={{display:'flex',gap:"70px"}}>
<Form.Label>Gender:</Form.Label>
<Form.Select defaultValue="Choose..." style={{width:"60%"}}>
            <option>Male</option>
            <option>Female</option>
          </Form.Select>
</Form.Group>
</Row>

    </Col>
</Row>
</Form>

</Col>

<Col>
<Row><Button variant="success">SaveChanges</Button></Row>
<Row><Button variant="secondary">UpdateContact</Button></Row>
<Row><Button variant="danger">Delete </Button></Row>
</Col>
</Row>
 </Container>
 <Container>
    <Row>

   
    <Col xs={7}>
<Col className='pt-2'>
<Row>
  <Col>
  <Card>
   <Card.Body>
    <p>********2345</p>
   </Card.Body>
    </Card>
     </Col>
  <Col>
  <Card>
  <Card.Body>
  <p>********2345aa</p>
  </Card.Body>
    </Card>
  
  </Col>

<Row>
  <Container>
  
<Col>
<p style={{fontWeight:"bold"}}>Billing Address</p>
<Form>
  <Row>
  
  <Form.Group>
    <Form.Check type="checkbox" label='Same as Home add' />
  </Form.Group>
  <Col>
  <Form.Group>
    <Form.Label>FirstName:</Form.Label>
    <Form.Control type='text'/>
  </Form.Group>
  </Col>
 
  <Col>
  <Form.Group>
    <Form.Label>LastName</Form.Label>
    <Form.Control type='text'/>

  </Form.Group>
  </Col>
  <Row>
  <Col xs={6}>
  <Form.Group>
    <Form.Label>Address Line:1</Form.Label>
    <Form.Control type="address"/>
  </Form.Group>
  </Col>
  <Col xs={6}>
  <Form.Group>
    <Form.Label>Address Line:2</Form.Label>
    <Form.Control type="address"/>
  </Form.Group>
  </Col>
  </Row>

  <Row>
<Col> 
<Form.Group>
    <Form.Label>Country:</Form.Label>
  <InputGroup.Text>US</InputGroup.Text>
  </Form.Group>
  </Col>

<Col>
<Form.Group>
    <Form.Label>State/Province/Region</Form.Label>
    <Form.Select>
      <option>select</option>
      <option>select</option>
      <option>select</option>
    </Form.Select>
  </Form.Group>
</Col>

<Col>
<Form.Group>
    <Form.Label>City</Form.Label>
    <Form.Control type="text"/>
  </Form.Group>
</Col>
<Col>
<Form.Group>
    <Form.Label>ZipCode:</Form.Label>
    <Form.Control type='text'/>
  </Form.Group>
</Col>
  </Row>
  <Row xs={2}>
  <Button variant='secondary'>Edit Details</Button>
    </Row>
  </Row>
</Form>
</Col>
</Container>
</Row>
  
  </Row>
</Col>
    </Col>

<Col xs ={5}style={{paddingTop:"25px"}}>
 {Carddetails.map((da,i)=>{
    return (
        <Row key={i}>
            <Col xs={1}><RiUserSettingsFill/></Col>
            <Col style={{fontWeight:"bold"}}>{da.acc} <span style={{color:"yellow"}}>{da.type}</span></Col>
        </Row>
    )
 })}
</Col>
</Row>
    </Container>
    </>
  )
}

export default Account