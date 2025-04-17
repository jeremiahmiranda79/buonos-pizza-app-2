import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import {PRODUCT_CATEGORIES} from '../../constants/regularMenuItems/categoriesRegular';
import {SPECIALTY_PIZZA} from '../../constants/regularMenuItems/specialtyPizza';
import {TOPPINGS_PIZZA} from '../../constants/toppingsPizza';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">SPECIALTY TOPPINGS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Topping choices</h4>
        <h6>Specialty pizza toppings are sold by the each</h6>
        <ul>{TOPPINGS_PIZZA.map((topping) => (<li key={topping.id}>{topping.name} - Full: ${topping.priceFull.toFixed(2)} Half: ${topping.priceHalf.toFixed(2)}</li>))}</ul>
      </Modal.Body>
    </Modal>
  );
};

const SpecialtyPizza = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container id={PRODUCT_CATEGORIES[1].id}>
      <h1 className='Title' style={{marginTop: '10px', marginBottom: '10px'}}>{PRODUCT_CATEGORIES[1].name}</h1>
      <Image style={{marginBottom: '10px'}} src="/images/categories/pizza-special.webp" fluid alt={PRODUCT_CATEGORIES[1].name}/>
      <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
        {SPECIALTY_PIZZA.map((item) => (
          <Col key={item.id}>
          <Card className='h-100'>
            <Card.Img variant="top" src={item.images} alt={item.name}/>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text style={{marginBottom: '5px'}} >{item.description}</Card.Text>
              {item.size1 ? <Card.Text style={{marginBottom: '0px'}}>{item.size1} ${item.price1.toFixed(2)}</Card.Text> : null}
              {item.size2 ? <Card.Text style={{marginBottom: '0px'}}>{item.size2} ${item.price2.toFixed(2)}</Card.Text> : null}
              {item.size3 ? <Card.Text style={{marginBottom: '0px'}}>{item.size3} ${item.price3.toFixed(2)}</Card.Text> : null}
              <Button style={{marginTop: '10px'}} variant="primary" onClick={() => setModalShow(true)}>See topping choices</Button>
              <MyVerticallyCenteredModal show={modalShow}onHide={() => setModalShow(false)}/>      
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SpecialtyPizza;