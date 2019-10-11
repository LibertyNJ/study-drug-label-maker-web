'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import { reduceClassNames } from '../../../../../../../../util';

const BASE_CLASS_NAME = 'border overflow-hidden p-3';

FormSubsection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
};

export default function FormSubsection({
  children, className, heading, ...restProps
}) {
  return (
    <section className={reduceClassNames(BASE_CLASS_NAME, className)} {...restProps}>
      <h3 className="text-primary">{heading}</h3>
      {children}
    </section>
  );
}
