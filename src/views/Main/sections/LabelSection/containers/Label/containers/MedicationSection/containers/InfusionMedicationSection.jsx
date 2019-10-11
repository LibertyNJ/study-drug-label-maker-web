'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LabelRow from '../../../components/LabelRow';
import { formatDatetimeString } from '../../../../../../../../../util';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfusionMedicationSection);

function mapStateToProps(state) {
  return {
    diluent: state.medicationDiluent,
    expirationDate: state.medicationExpirationDate,
    manufacturer: state.medicationManufacturer,
    name: state.medicationName,
    preparationDate: state.medicationPreparationDate,
    rate: state.medicationRate,
    strength: state.medicationStrength,
    strengthIsEnabled: state.medicationStrengthIsEnabled,
    volume: state.medicationVolume,
  };
}

function mapDispatchToProps() {
  return {};
}

InfusionMedicationSection.propTypes = {
  diluent: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  preparationDate: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  strength: PropTypes.string.isRequired,
  strengthIsEnabled: PropTypes.bool.isRequired,
  volume: PropTypes.string.isRequired,
};

function InfusionMedicationSection({
  diluent,
  expirationDate,
  manufacturer,
  name,
  preparationDate,
  rate,
  strength,
  strengthIsEnabled,
  volume,
  ...restProps
}) {
  return (
    <section {...restProps}>
      <LabelRow>
        <p className="font-weight-bold">
          {name || 'Medication'} {strengthIsEnabled ? strength || '## mG' : ''}
        </p>
        <p>Mfr: {manufacturer}</p>
      </LabelRow>
      <LabelRow>
        <p className="font-weight-bold">
          in {diluent || 'Diluent'}, {volume || '## mL'}
        </p>
      </LabelRow>
      <LabelRow>
        <p className="font-weight-bold">Rate: {rate || '## mL / hr'}</p>
      </LabelRow>
      <LabelRow>
        <p>Prep: {preparationDate ? formatDatetimeString(preparationDate) : 'MM/DD/YYYY hh:mm'}</p>
        <p className="font-weight-bold">
          Exp: {expirationDate ? formatDatetimeString(expirationDate) : 'MM/DD/YYYY hh:mm'}
        </p>
      </LabelRow>
    </section>
  );
}
