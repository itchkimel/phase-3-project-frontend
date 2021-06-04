import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import AddToCartModal from './AddToCartModal'

const music = <FontAwesomeIcon icon={faMusic} />

const GuitarCard = (props) => {

  const [modalShow, setModalShow] = React.useState(false);

  return(
    <Container>
      <AddToCartModal show={modalShow} onHide={() => setModalShow(false)}/>
      <Col>
          <Card className="text-center guitarCardLayout">
              <Card.Img src={props.guitar.image} alt={props.guitar.brand} fluid/>
              <Card.Body>
              <Card.Title className="nav-text">{props.guitar.brand}</Card.Title>
              <Card.Text >{props.guitar.model}</Card.Text>
              <Card.Text>{props.guitar.color}</Card.Text>
              <Card.Text className="price-text">${props.guitar.price}</Card.Text>
              {props.loggedIn === true ? <Button variant="outline-dark" onClick={() => {
                setModalShow(true)
                props.addToCart(props.guitar)}} > Add To Cart</Button> : music}
              </Card.Body>
          </Card>
      </Col>
    </Container>  
  )
}

export default GuitarCard