import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from './LabelRow';
import LabelSection from './LabelSection';

const StudySection = ({ protocol, rxNumber, patientNumber }) => (
  <LabelSection>
    <LabelRow>
      <p>Protocol: {protocol}</p>
      <p>Rx #: {rxNumber.value}</p>
    </LabelRow>
    <LabelRow>
      <p>Patient #: {patientNumber}</p>
    </LabelRow>
  </LabelSection>
);

StudySection.propTypes = {
  patientNumber: PropTypes.string,
  protocol: PropTypes.string,
  rxNumber: PropTypes.shape({
    value: PropTypes.string,
    isOverridden: PropTypes.bool,
  }).isRequired,
};

StudySection.defaultProps = {
  protocol: undefined,
  patientNumber: undefined,
};

export default StudySection;
