import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionNumber = (currentValue, setOptionValue, props) => (
  <div className={styles.number}>
    <input className={styles.inputSmall} type='number'
      value={currentValue} min={props.options.limits.min} max='14'
      onChange={event => setOptionValue(event.currentTarget.value.id)} />
  </div>
);

OrderOptionNumber.propTypes = {
  options: PropTypes.object,
};

export default OrderOptionNumber;
