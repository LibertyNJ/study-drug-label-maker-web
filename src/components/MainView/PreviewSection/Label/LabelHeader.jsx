import React from 'react';

import LabelRow from './LabelRow';

const LabelHeader = () => (
  <header>
    <LabelRow>
      <p className="font-weight-bold mx-auto">
        North Shore University Hospital — Pharmacy Department
      </p>
    </LabelRow>
    <LabelRow>
      <p>
        300 Community Drive
        <br />
        Manhasset, NY 11030
      </p>
      <p>
        DEA# AN0768917
        <br />
        (516)562-4700
      </p>
    </LabelRow>
  </header>
);

export default LabelHeader;
