import PropTypes from 'prop-types';
import React from 'react';

import { reduceClassNames } from '../../util';

RadioButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  wrapperClassName: PropTypes.string,
};

export default function RadioButton({
  className,
  label,
  labelClassName,
  name,
  value,
  wrapperClassName,
  ...restProps
}) {
  return (
    <div className={reduceClassNames('custom-control custom-radio', wrapperClassName)}>
      <input
        className={reduceClassNames('custom-control-input', className)}
        id={value}
        name={name}
        type="radio"
        value={value}
        {...restProps}
      />
      <label className={reduceClassNames('custom-control-label', labelClassName)} htmlFor={value}>
        {label}
      </label>
    </div>
  );
}
