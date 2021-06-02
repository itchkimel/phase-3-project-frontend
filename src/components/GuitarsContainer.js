import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import GuitarCard from './GuitarCard'

export default class GuitarsContainer extends Component{



  render(){

      return(
        <div >
            <Container>
                <Row lg={3}>
                    {this.props.guitars.map(guitar => <GuitarCard key={guitar.id} guitar={guitar} {...this.props.routerProps} addToCart={this.props.addToCart} />)}
                </Row>
            </Container>
        </div>    
      )
  }
}