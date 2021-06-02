import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import GuitarCard from './GuitarCard'

export default class GuitarsContainer extends Component{

<<<<<<< HEAD


=======
>>>>>>> 4c184150f52540b5688b0cd2abb08ed96768debd
  render(){

      return(
        <div>
            <Container>
                <Row lg={3}>
                    {this.props.guitars.map(guitar => <GuitarCard key={guitar.id} guitar={guitar} {...this.props.routerProps} addToCart={this.props.addToCart} />)}
                </Row>
            </Container>
        </div>    
      )
  }
}

// {this.props.guitars.map(guitar => <GuitarCard guitar={guitar}/>)}