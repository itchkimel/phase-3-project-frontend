import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import GuitarCard from './GuitarCard'

export default class GuitarsContainer extends Component{

  render(){

      return(
        <div>
            <Container>
                <Row sm={4}>
                    {this.props.guitars.map(guitar => <GuitarCard guitar={guitar}/>)}
                </Row>
            </Container>
        </div>    
      )
  }
}