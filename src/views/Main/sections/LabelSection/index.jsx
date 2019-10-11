'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import Label from './containers/Label';
import { reduceClassNames } from '../../../../util';

const BASE_CLASS_NAME = 'align-items-center d-flex d-print-block justify-content-around overflow-auto p-3';

LabelSection.propTypes = {
  className: PropTypes.string,
};

export default function LabelSection({ className, ...restProps }) {
  return (
    <section
      className={reduceClassNames(BASE_CLASS_NAME, className)}
      id="label-section"
      {...restProps}
    >
      <Label />
    </section>
  );
}
