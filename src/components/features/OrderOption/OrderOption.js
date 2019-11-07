import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';


const OrderOption = (props) => {
  return (
    <div className={styles.component}>
      <h3 className={styles.title}> {props.option.name} </h3>
    </div>
  );
};

OrderOption.propTypes = {
  option: PropTypes.object,
  name: PropTypes.string,

};

export default OrderOption;
