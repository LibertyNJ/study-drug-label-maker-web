import PropTypes from 'prop-types';
import React from 'react';

import Info from './Info';
import InputGroup from './InputGroup';
import { reduceClassNames } from '../../util';

Input.propTypes = {
  info: PropTypes.string,
  label: PropTypes.node.isRequired,
  labelClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  wrapperClassName: PropTypes.string,
};

export default function Input({
  info,
  label,
  labelClassName,
  name,
  wrapperClassName,
  ...restProps
}) {
  return (
    <div className={reduceClassNames('form-group', wrapperClassName)}>
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>
      <InputGroup name={name} {...restProps} />
      {info && <Info>{info}</Info>}
    </div>
  );
}
