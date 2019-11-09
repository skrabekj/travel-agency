import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon.js';
import {formatPrice} from '../../../utils/formatPrice.js';

const OrderOptionIcon = (values, setOptionValue, props) => (
  <div className={styles.icon}>
    {values.map(value => (

      <div key={value.id}
        className={styles.icon, styles.iconActive}
        onClick={event=> setOptionValue(event.currentTarget.value)}>
        <Icon name={props.name}> {value.name} ({formatPrice(value.price)})</Icon>
      </div>

    ))}
  </div>
);

OrderOptionIcon.propTypes = {
  name: PropTypes.string,
};

export default OrderOptionIcon;
