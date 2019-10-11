'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LabelRow from '../../../components/LabelRow';
import { formatDatetimeString } from '../../../../../../../../../util';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SyringeMedicationSection);

function mapStateToProps(state) {
  return {
    expirationDate: state.medicationExpirationDate,
    manufacturer: state.medicationManufacturer,
    name: state.medicationName,
    preparationDate: state.medicationPreparationDate,
    quantity: state.medicationQuantity,
    sig: state.medicationSig,
    strength: state.medicationStrength,
    strengthIsEnabled: state.medicationStrengthIsEnabled,
    volume: state.medicationVolume,
  };
}

function mapDispatchToProps() {
  return {};
}

SyringeMedicationSection.propTypes = {
  expirationDate: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  preparationDate: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  sig: PropTypes.string.isRequired,
  strength: PropTypes.string.isRequired,
  strengthIsEnabled: PropTypes.bool.isRequired,
  volume: PropTypes.string.isRequired,
};

function SyringeMedicationSection({
  expirationDate,
  manufacturer,
  name,
  preparationDate,
  quantity,
  sig,
  strength,
  strengthIsEnabled,
  volume,
  ...restProps
}) {
  return (
    <section {...restProps}>
      <LabelRow>
        <p className="font-weight-bold">
          {name || 'Medication'} {strengthIsEnabled ? strength || '## mG' : ''} /{' '}
          {volume || '## mL'} Syringe
        </p>
        <p>Mfr: {manufacturer}</p>
      </LabelRow>
      <LabelRow>
        <p className="font-italic">{sig || 'Sig'}</p>
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
