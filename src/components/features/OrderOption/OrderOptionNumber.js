/*import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionNumber =  (props, {setOptionValue}) => (
  <div className={styles.number}>
    <input className={styles.inputSmall} type='number'
      value={props.currentValue} min={props.limits.min} max={props.limits.max}
      onChange={() => setOptionValue(props.currentTarget.value.id)} />

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

export default OrderOptionNumber;*/
//onChange={() => props.setOptionValue(props.currentTarget.value.id)} />
import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionNumber = ({
  currentValue,
  setOptionValue,
  limits: { min, max },
}) => {
  return (
    <div className={styles.number}>
      <input
        className={styles.inputSmall}
        type="number"
        value={currentValue}
        onChange={event => setOptionValue(event.currentTarget.value)}
        min={min}
        max={max}
      />{' '}
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  tripCost: PropTypes.string,
  limits: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
};

export default OrderOptionNumber;
