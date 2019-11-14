import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionNumber =  (props) => (
  <div className={styles.number}>
    <input className={styles.inputSmall} type='number'
      value={props.currentValue} min={props.limits.min} max={props.limits.max}
      onChange={(event) => props.setOptionValue(event.currentTarget.value)} />

  </div>
);

OrderOptionNumber.propTypes = {
  options: PropTypes.object,
  limits: PropTypes.object,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  currentTarget: PropTypes.node,
  //setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;
