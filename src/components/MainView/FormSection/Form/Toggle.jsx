import PropTypes from 'prop-types';
import React from 'react';

const Toggle = props => (
  <div className={`custom-control custom-${props.type} ${props.wrapperClassName}`}>
    <input
      id={props.type === 'radio' ? props.value : props.name}
      className="custom-control-input"
      type={props.type === 'radio' ? 'radio' : 'checkbox'}
      name={props.name}
      value={props.type === 'radio' ? props.value : undefined}
      checked={props.checked}
      onChange={props.handleChange}
    />
    <label
      className={`custom-control-label ${props.labelClassName}`}
      htmlFor={props.type === 'radio' ? props.value : props.name}
    >
      {props.label}
    </label>
  </div>
);

Toggle.propTypes = {
  checked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

Toggle.defaultProps = {
  checked: false,
  labelClassName: undefined,
  value: undefined,
  wrapperClassName: undefined,
};

export default Toggle;
