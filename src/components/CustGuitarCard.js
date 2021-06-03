// import { Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const CustGuitarCard = (props) => {

  return(
      <Col>
          <Card>
              hello from cust card
              {/* <Card.Img src={props.guitar.image} alt={props.guitar.brand} fluid/> */}
              <Card.Body>
              {/* <Card.Title >{props.guitar.brand}</Card.Title>
              <Card.Text >{props.guitar.model}</Card.Text>
              <Card.Text>{props.guitar.color}</Card.Text>
              <Card.Text>${props.guitar.price}</Card.Text> */}
              {/* <Card.Text>{props.guitar.id}</Card.Text> */}
              {/* <Button variant="outline-dark" onClick={() => props.addToCart(props.guitar)} > Add To Cart</Button> */}
              </Card.Body>
          </Card>
      </Col>
  )
}

export default CustGuitarCard