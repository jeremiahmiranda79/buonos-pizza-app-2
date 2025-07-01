import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import {PRODUCT_CATEGORIES} from '../../constants/regularMenuItems/categoriesRegular';
import {APPETIZER} from '../../constants/regularMenuItems/appetizer';
import {SAUCE_WINGS} from '../../constants/sauceWings';
import {WING_DIPPING} from '../../constants/wingDipping';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">WING SAUCES</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Wing sauce choices</h4>
        <h6>Extra sides of wing sauce are sold by the each</h6>
        <ul>{SAUCE_WINGS.map((sauce) => (<li key={sauce.id}>{sauce.name}</li>))}</ul>
      </Modal.Body>
    </Modal>
  );
};

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">DRESSINGS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Dressing choices</h4>
        <h6>Extra sides of dressings are sold by the each</h6>
        <ul>{WING_DIPPING.map((dip) => (<li key={dip.id}>{dip.name} - First one free. All extra dressings: ${dip.price.toFixed(2)}</li>))}</ul>
      </Modal.Body>
    </Modal>
  );
};

const Appetizer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  return (
    <Container id={PRODUCT_CATEGORIES[4].id} style={{scrollMarginTop: '150px'}}>
      <h1 className='Title' style={{marginTop: '10px', marginBottom: '10px'}}>{PRODUCT_CATEGORIES[4].name}</h1>
      <Image style={{marginBottom: '10px'}} src="/images/categories/app-wings.webp" fluid alt={PRODUCT_CATEGORIES[4].name}/>
      <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
        {APPETIZER.map((item) => (
          <Col key={item.id}>
            <Card className='h-100'>
              <Card.Img variant="top" src={item.images} alt={item.name}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text style={{marginBottom: '5px'}}>{item.description}</Card.Text>
                {item.size1 ? <Card.Text style={{marginBottom: '0px'}}>{item.size1} ${item.price1.toFixed(2)}</Card.Text> : null}
                {item.size2 ? <Card.Text style={{marginBottom: '0px'}}>{item.size2} ${item.price2.toFixed(2)}</Card.Text> : null}
                {item.size3 ? <Card.Text style={{marginBottom: '0px'}}>{item.size3} ${item.price3.toFixed(2)}</Card.Text> : null}

                {item.isWings && <div className='mt-auto'>
                  <Button style={{marginTop: '10px'}} variant="primary" onClick={() => setModalShow(true)}>See wing sauce choices</Button>
                </div>}
                <MyVerticallyCenteredModal show={modalShow}onHide={() => setModalShow(false)}/>
                  
                {item.isWings && <div className='mt-auto'>
                  <Button style={{marginTop: '10px'}} variant="primary" onClick={() => setModalShow2(true)}>See dressing choices</Button>
                </div>}
                <MyVerticallyCenteredModal2 show={modalShow2}onHide={() => setModalShow2(false)}/> 

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Appetizer;