import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LabelRow from '../../../components/LabelRow';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StandardMedicationSection);

function mapStateToProps(state) {
  return {
    form: state.medicationForm,
    manufacturer: state.medicationManufacturer,
    name: state.medicationName,
    quantity: state.medicationQuantity,
    sig: state.medicationSig,
    strength: state.medicationStrength,
    strengthIsEnabled: state.medicationStrengthIsEnabled,
  };
}

function mapDispatchToProps() {
  return {};
}

StandardMedicationSection.propTypes = {
  form: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  sig: PropTypes.string.isRequired,
  strength: PropTypes.string.isRequired,
  strengthIsEnabled: PropTypes.bool.isRequired,
};

function StandardMedicationSection({
  form,
  manufacturer,
  name,
  quantity,
  sig,
  strength,
  strengthIsEnabled,
  ...restProps
}) {
  return (
    <section {...restProps}>
      <LabelRow>
        <p className="font-weight-bold">
          {name || 'Medication'} {strengthIsEnabled ? strength || '## mG' : ''} {form || 'Form'}
        </p>
        <p>Mfr: {manufacturer}</p>
      </LabelRow>
      <LabelRow>
        <p>Qty: {quantity || '##'}</p>
      </LabelRow>
      <LabelRow>
        <p className="font-italic">{sig || 'Sig'}</p>
      </LabelRow>
    </section>
  );
}
