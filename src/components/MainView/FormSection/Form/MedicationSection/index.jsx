import PropTypes from 'prop-types';
import React from 'react';

import InfusionMedicationSection from './InfusionMedicationSection';
import StandardMedicationSection from './StandardMedicationSection';
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

}

export default MedicationSection;
