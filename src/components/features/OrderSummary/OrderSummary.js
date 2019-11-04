import React from 'react';
import styles from './OrderSummary.scss';
//import calculateTotal from '../../../utils/calculateTotal.js';
//import formatPrice from '../../../utils/formatPrice.js';

//const totalPrice = () => calculateTotal();
//console.log(totalPrice);
//const priceformat = (totalPrice) => formatPrice(totalPrice);
//console.log(priceformat);

const OrderSummary = () => (
  <h2 className={styles.component}>Total<strong>$12,345</strong></h2>

);



export default OrderSummary;
