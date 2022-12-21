import React from "react";

import Container from '../components/Grid/Container'
import Col from '../components/Grid/Col'
import Row from '../components/Grid/Row'

const Layout = () => {
    return(
        <Container>
            <Row className="rows">
                <Col className="columns">1 of 2</Col> 
                <Col className="columns">2 of 2</Col>
            </Row>
            <Row className="rows">
                <Col className="columns">sample</Col>
                <Col className="columns">another sample</Col>
            </Row>
            <Row className="rows">
                <Col className="columns">1 of 2</Col> 
                <Col className="columns">2 of 2</Col>
            </Row>
            <Row className="rows">
                <Col className="columns">1 of 3</Col>
                <Col className="columns">2 of 3</Col>
                <Col className="columns">3 of 3</Col>
            </Row>
        </Container>
    )
}

export default Layout;