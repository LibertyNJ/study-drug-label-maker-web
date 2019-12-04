import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import InfusionMedicationSection from './containers/InfusionMedicationSection';
import StandardMedicationSection from './containers/StandardMedicationSection';
import SyringeMedicationSection from './containers/SyringeMedicationSection';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MedicationSection);

function mapStateToProps(state) {
  return {
    labelType: state.labelType,
  };
}

function mapDispatchToProps() {
  return {};
}

MedicationSection.propTypes = {
  labelType: PropTypes.oneOf(['infusion', 'standard', 'syringe', '']).isRequired,
};

function MedicationSection({ labelType, ...restProps }) {
  switch (labelType) {
    case 'infusion':
      return <InfusionMedicationSection {...restProps} />;
    case 'standard':
      return <StandardMedicationSection {...restProps} />;
    case 'syringe':
      return <SyringeMedicationSection {...restProps} />;
    default:
      return null;
  }
}
