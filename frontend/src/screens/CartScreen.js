import React from "react";
import { Row, Col, Card, ListGroup, Button } from "react-bootstrap";

const CartScreen = () => {
  // TODO: use useParams to get added item

  const checkoutHandler = () => {
    console.log("checkout");
		// TODO: dispatch order action here
  };

  return (
    <Row className="pt-4">
      <Col md={8}>
        <h2>Cart</h2>
      </Col>
      <Col md={4}>
        <Row>
          <Card>
            <Card.Header>
              <h3>Cart Totals</h3>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Subtotal: </strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>VAT: </strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Shipping: </strong>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <h4>Total: </h4>
            </Card.Footer>
          </Card>
        </Row>
        <Row>
          <Button type="button" className="my-3" onCLick={checkoutHandler}>
            Proceed to checkout
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default CartScreen;