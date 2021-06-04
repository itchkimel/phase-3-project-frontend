import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import GuitarCard from './GuitarCard'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'


export default class GuitarsContainer extends Component{

  state = {
    showHide: true
  }

  showComponent = () => {
    this.setState({
      showHide: !this.state.showHide
    })
  }

  render(){

    return(
      <div>
        <Jumbotron className="text-center">
            <h1 className="nav-text jumbotronText">The Guitar Collection</h1>
            <p className="jumbotronText poppins-txt">
              Dive into our handpicked selection of axes, all guaranteed to pack some heat into your rig.<br></br>
               Browse the entire collection below or choose a search tailored to your fit below.
            </p>
            <p>
              <Button onClick={this.showComponent}variant="light jumbotronText">Search by Filter</Button>
            </p>
            <p>
            {this.state.showHide == true ? " " : <Form className="form_content_wrap">

                <Form.Group >
                  <Form.Label className="jumbotronText mainHeaderCaption">e.g. "Gibson", "Red", "Mahogany"</Form.Label>
                  <Form.Control onChange={(e) => this.props.handleFilter(e)}
                    type="text"
                    placeholder="search description"/>
                </Form.Group>    
            </Form>}
            </p>
          </Jumbotron>

          <Container>
              <Row lg={4}>
                  {this.props.guitars.map(guitar => <GuitarCard key={guitar.id} guitar={guitar} {...this.props.routerProps} addToCart={this.props.addToCart} loggedIn={this.props.loggedIn} />)}
              </Row>
          </Container>
      </div>    
    )
  }
}
