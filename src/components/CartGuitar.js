import { Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const CartGuitar = (props) => {



  return(
      <Col>
          <Card className="text-center guitarCardLayout">

              <Card.Img src={props.guitar.image} alt={props.guitar.brand} fluid/>
              <Card.Body>
              <Card.Title className="nav-text">{props.guitar.brand}</Card.Title>
              <Card.Text >{props.guitar.model}</Card.Text>
              <Card.Text >{props.guitar.color}</Card.Text>
              <Card.Text className="price-text">${props.guitar.price}</Card.Text>
              </Card.Body>
              <Button variant="outline-danger" onClick={() => props.deleteFromCart(props.guitar)} > Delete from Cart</Button>
          </Card>
      </Col>
  )
}

export default CartGuitar