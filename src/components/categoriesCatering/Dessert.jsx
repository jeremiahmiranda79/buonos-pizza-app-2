import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {CATEGORIES_CATERING} from '../../constants/cateringMenuItems/categoriesCatering';
import {DESSERT} from '../../constants/cateringMenuItems/dessert';
 
const Dessert = () => {
  return (
    <Container id={CATEGORIES_CATERING[5].id} style={{scrollMarginTop: '150px'}}>
      <h1 className='Title' style={{marginTop: '10px'}}>{CATEGORIES_CATERING[5].name}</h1>
      <h2>{CATEGORIES_CATERING[5].included}</h2>
      <h2>{CATEGORIES_CATERING[5].choice}</h2>
      <h4>{CATEGORIES_CATERING[5].portion}</h4>
      <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
        {DESSERT.map((item) => (
          <Col key={item.id}>
            <Card className='h-100'>
              <Card.Img variant="top" src={item.images} alt={item.name}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                {item.size1 ? <Card.Text style={{marginBottom: '0px'}}>{item.size1} ${item.price1}</Card.Text> : null}
                {item.size2 ? <Card.Text style={{marginBottom: '0px'}}>{item.size2} ${item.price2}</Card.Text> : null}
                {item.size3 ? <Card.Text style={{marginBottom: '0px'}}>{item.size3} ${item.price3}</Card.Text> : null}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dessert;