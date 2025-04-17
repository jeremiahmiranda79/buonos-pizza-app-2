import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import {PRODUCT_CATEGORIES} from '../../constants/regularMenuItems/categoriesRegular';
import {SIDE_ORDER} from '../../constants/regularMenuItems/sideOrder';
import {PASTA_CHOICE} from '../../constants/pastaChoices';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg"aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Pastas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Pasta choices</h4>
        <h6>Extra pasta choices are sold by the each</h6>
        <ul>{PASTA_CHOICE.map((pasta) => (<li key={pasta.id}>{pasta.name}</li>))}</ul>
      </Modal.Body>
    </Modal>
  );
};

const SideOrder = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container id={PRODUCT_CATEGORIES[12].id}>
      <h1 className='Title' style={{marginTop: '10px', marginBottom: '10px'}}>{PRODUCT_CATEGORIES[12].name}</h1>
      <Image style={{marginBottom: '10px'}} src="/images/categories/side-meatballs.webp" fluid alt={PRODUCT_CATEGORIES[12].name}/>
      <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
        {SIDE_ORDER.map((item) => (
          <Col key={item.id}>
            <Card className='h-100'>
              <Card.Img variant="top" src={item.images} alt={item.name}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text style={{marginBottom: '5px'}} >{item.description}</Card.Text>
                {item.size1 ? <Card.Text style={{marginBottom: '0px'}}>{item.size1} ${item.price1.toFixed(2)}</Card.Text> : null}
                {item.size2 ? <Card.Text style={{marginBottom: '0px'}}>{item.size2} ${item.price2.toFixed(2)}</Card.Text> : null}
                {item.size3 ? <Card.Text style={{marginBottom: '0px'}}>{item.size3} ${item.price3.toFixed(2)}</Card.Text> : null}
                {item.isPasta && <div className='mt-auto'>
                  <Button style={{marginTop: '10px'}} variant="primary" onClick={() => setModalShow(true)}>See pasta choices</Button>
                </div>}
                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SideOrder;