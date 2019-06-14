import PropTypes from 'prop-types';
import React from 'react';

import StandardMedicationSection from './StandardMedicationSection';
import InfusionMedicationSection from './InfusionMedicationSection';
import SyringeMedicationSection from './SyringeMedicationSection';

const MedicationSection = (props) => {
  switch (props.labelType) {
    case 'standard':
      return <StandardMedicationSection {...props} />;
    case 'infusion':
      return <InfusionMedicationSection {...props} />;
    case 'syringe':
      return <SyringeMedicationSection {...props} />;
    default:
      return null;
  }
};

MedicationSection.propTypes = {
  labelType: PropTypes.oneOf(['standard', 'infusion', 'syringe']),
};

MedicationSection.defaultProps = {
  labelType: undefined,
};

export default MedicationSection;
