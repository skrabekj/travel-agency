import React from 'react';
import PropTypes from 'prop-types';


const OrderOptionIcon = (props) => (
  <div>
    {props.name}
  </div>
);

OrderOptionIcon.propTypes = {
  name: PropTypes.string,
};

export default OrderOptionIcon;
