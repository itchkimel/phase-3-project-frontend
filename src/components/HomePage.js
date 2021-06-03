import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'


export default class HomePage extends Component{

  render(){
      return(
        <div >
              <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/56/bd.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="nav-text">Welcome To Nicks Guitar World</h3>
          <p>The finest handpicked selection of guitars in New York City.{"\n"}
            1922-3B Broadway ave. {"\n"}
            Brooklyn, Ny{"\n"}
            11221{"\n"}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/vintage-fender-stratocaster-head-daniel-hagerman.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="nav-text">Free and Fast Shipping</h3>
          <p>Enjoy our free shipping and lightning fast delivery to keep up with the speed of your riffs. All items packed with extreme care and precision. Money Back guarantee.</p>
        </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
          {/* <GuitarCard /> */}
        </div>
      )
  }
}