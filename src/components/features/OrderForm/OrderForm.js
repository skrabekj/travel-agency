import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';

const OrderForm = () => (
  <Row>
    <Col xs={12}>
      <OrderSummary />
    </Col>
  </Row>
);

export default OrderForm;
