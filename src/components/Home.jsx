import React from 'react';
import Information from '../components/layout/Information';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import '../css/video_player.css';
import '../css/carousel.css';

const Home = () => {
  return (
    <div style={{margin: '100px 10px 10px 10px'}}>
      <h1 rel="preload" style={{textAlign: 'center'}}>Welcome to Buono's Pizza Higley</h1>
      <Information/>
      <h2 style={{textAlign: 'center'}}>How we do it</h2>
      <center>
        <div className="video-container">
          <iframe 
            className='responsive-iframe'
            src="https://www.youtube.com/embed/yaQVJVlKhPQ?si=V13N0b1yJtQaKEo9&amp;controls=0&autoplay=1&mute=1&loop=1&playlist=yaQVJVlKhPQ" 
            title="YouTube video player" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen 
          />
        </div>
      </center>
      <h2 style={{textAlign: 'center'}}>Our Promise</h2> 
      <p className='x' style={{textAlign: 'center'}}>Our classic pizza's are so fresh, we have to slap them!</p>
      <p style={{textAlign: 'center'}}><a href="/menu" className="active btn btn-primary">View our full menu here!</a></p>
      <center>
        <Carousel>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/carousel/store.webp"
                alt="store front"
              />
            </div> 
            <Carousel.Caption><h3>Buonos Pizza Higley</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/carousel/slice-pies.webp"
                alt="store front"
              />
            </div> 
            <Carousel.Caption><h3>Daily Slice Specials</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/carousel/dough.webp"
                alt="house made dough balls"
              />
            </div>
            <Carousel.Caption><h3>Fresh dough made in house daily</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/carousel/legend.webp"
                alt="experienced chefs in action"
              />
            </div>
            <Carousel.Caption><h3>Experienced Chefs</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/carousel/new-york.webp"
                alt="New York style"
              />
            </div>
            <Carousel.Caption><h3>New York Style</h3></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/carousel/vintage.webp"
                alt="vintage 1989"
              />
            </div>
            <Carousel.Caption><h3>Quality Since 1989</h3></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </center>
      <h2 style={{textAlign: 'center', marginTop: '10px'}}>Buonos Specialties</h2>
      <p className='x' style={{textAlign: 'center'}}>We refuse to compromise. We use the freshest and finest ingredients. Our pizza dough, pizza sauce, and pasta sauce are made fresh daily in house.</p> 
      <p style={{textAlign: 'center'}}><a href="/specials" className="active btn btn-primary" >View our specialty options here!</a></p>  
      <h2 style={{textAlign: 'center'}}>Loyalty Bonus</h2>
      <p className='x' style={{textAlign: 'center'}}>With any purchase of a large, or extra-large pizza pie, you will receive a magnet. Collect 8 magnets and get a large 1 topping pizza pie for FREE!</p>
      <p className='x' style={{fontWeight: 'bold', textAlign: 'center'}}>*Valid only on dine in or in person take out orders*</p>
      <p className='y' style={{fontWeight: 'bold', textAlign: 'center'}}>*Magnets are not exchangeable between store locations*</p> 
      <Container>
        <center>
          <Row>
            <Col xs={6} md={6}>
              <Image 
                src="/images/magnets/magnet-full.webp"
                alt='full 8 piece magnet'
                width="80%"
                fluid
                thumbnail 
              />
            </Col>
            <Col xs={6} md={6}>
              <Image 
                src="/images/magnets/magnet-slice.webp"
                alt='single slice of an 8 piece magnet set'
                width="80%"
                fluid
                thumbnail 
              />
            </Col>
          </Row>
        </center>
      </Container>
      <h2 style={{textAlign: 'center', marginTop: '10px'}}>Take Out Or Dine In</h2>
      <p className='x' style={{textAlign: 'center'}}>Come see us in person! To take full advantage of our quality the best option is to dine in, or reserve an in store pick up order. We love our customers so feel free to visit during our normal business hours.</p>
      <p style={{textAlign: 'center'}}><a href="/specials" className="active btn btn-primary">View our menu options here!</a></p>
      <h2 style={{textAlign: 'center'}}>Delivery Service thru 3rd party</h2>
      <p className='x' style={{textAlign: 'center'}}>We use 3rd party delivery services.</p>
      <p style={{textAlign: 'center'}}><a href="/delivery" className="active btn btn-primary">View our delivery options here!</a></p>
    </div>
  );
};

export default Home;