import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from './LabelRow';
import LabelSection from './LabelSection';

const PrescriberPharmacistSection = ({ prescriber, pharmacist }) => (
  <LabelSection>
    <LabelRow>
      <p>Prescriber: {prescriber}</p>
      <p>RPh: {pharmacist}</p>
    </LabelRow>
  </LabelSection>
);

PrescriberPharmacistSection.propTypes = {
  prescriber: PropTypes.string,
  pharmacist: PropTypes.string,
};

PrescriberPharmacistSection.defaultProps = {
  prescriber: undefined,
  pharmacist: undefined,
};

export default PrescriberPharmacistSection;
