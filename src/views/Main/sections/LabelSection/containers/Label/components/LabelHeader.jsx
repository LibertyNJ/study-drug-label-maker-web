'use-strict';

import React from 'react';

import LabelRow from './LabelRow';
import { facility } from '../../../../../../../config';

export default function LabelHeader({ ...restProps }) {
  return (
    <header {...restProps}>
      <LabelRow>
        <p className="font-weight-bold mx-auto">{facility.name}</p>
      </LabelRow>
      <LabelRow>
        <p>
          {facility.address.line1} <br />
          {facility.address.line2}
        </p>
        <p>
          DEA# {facility.deaNumber} <br />
          {facility.phoneNumber}
        </p>
      </LabelRow>
    </header>
  );
}
