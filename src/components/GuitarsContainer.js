import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import GuitarCard from './GuitarCard'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'


export default class GuitarsContainer extends Component{

  state = {
    showHide: false
  }

  showComponent = () => {
    
  }

  render(){

      return(
        <div>
          <Jumbotron className="text-center">
              <h1 className="nav-text">The Guitars Collection</h1>
              <p>
                Dive into our handpicked selection of axes, all guaranteed to pack some heat into your rig.
              </p>
              <p>
                <Button variant="outline-dark">Search by Filter</Button>
              </p>
              <p>
              <Form className="form_content_wrap">
                  <Form.Group>
                    <Form.Label>Brand: &nbsp;</Form.Label>

                    <Form.Check
                      inline
                      label="Gibson"
                      name="Gibson"
                      />
                      <Form.Check
                      inline
                      label="Fender"
                      name="Fender"
                      />
                      <Form.Check
                      inline
                      label="Gretsch"
                      name="Gretsch"
                      />
                      <Form.Check
                      inline
                      label="Danelectro"
                      name="Danelectro"
                      />
                      <Form.Check
                      inline
                      label="Charvel"
                      name="Charvel"
                      />
                      <Form.Check
                      inline
                      label="ESP"
                      name="ESP"
                      />
                      <Form.Check
                      inline
                      label="ESP"
                      name="ESP"
                      />
                      <Form.Check
                      inline
                      label="Ibanez"
                      name="Ibanez"
                      />
                      <Form.Check
                      inline
                      label="Jackson"
                      name="Jackson"
                      />
                      <Form.Check
                      inline
                      label="Rickenbacker"
                      name="Rickenbacker"
                      />
                  </Form.Group>

                  <Form.Group>
                    {/* <Form.Label>Model: &nbsp;</Form.Label>

                    <Form.Check
                      inline
                      label="Les Paul"
                      name="Les Paul"
                      // onChange={(e) => onRadioChange(e)}
                    /> */}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Keyword</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="search description"
                      // value={descValue}
                      // onChange={(e) => setDescValue(e.currentTarget.value)}
                    />
                  </Form.Group>


                  <Button
                    variant="primary"
                    type="submit"
                    // onClick={onFormSubmit}
                    style={{ marginRight: "10px" }}
                  >
                    Submit
                  </Button>
                  <Button variant="primary" type="submit">
                    Clear
                  </Button>
               
              </Form>
              </p>

            </Jumbotron>


            <Container>
                <Row lg={4}>
                    {this.props.guitars.map(guitar => <GuitarCard key={guitar.id} guitar={guitar} {...this.props.routerProps} addToCart={this.props.addToCart} />)}
                </Row>
            </Container>
        </div>    
      )
  }
}

// {this.props.guitars.map(guitar => <GuitarCard guitar={guitar}/>)}