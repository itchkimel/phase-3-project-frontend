// import { Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const CustGuitarCard = (props) => {
    console.log(props.guitar)
  return(
      <Col>
            <Card className='text-center guitarCardLayout' >
              <Card.Img src={props.guitar.guitar.image} alt={props.guitar.guitar.brand} fluid/>
              <Card.Body>
              <Card.Title className='nav-text' >{props.guitar.guitar.brand}</Card.Title>
              <Card.Text >{props.guitar.guitar.model}</Card.Text>
              </Card.Body>
          </Card>
      </Col>
  )
}

export default CustGuitarCard