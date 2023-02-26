import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Account from './Account'
import CreditCard from './CreditCard'
import SaveData from './SaveData'
import SearchAccounts from './SearchAccounts'

const Profiles = () => {
  return (
    <>
    
    <div>
    <SaveData/>
    <Row style={{display:"flex"}}>
    <Col xs={9}>
       <Account/> 
    </Col>
    <Col>
        <SearchAccounts/>
       </Col>
       <Row>
        <CreditCard/>
       </Row>
       </Row>
    </div>
    
    
    </>
  )
}

export default Profiles