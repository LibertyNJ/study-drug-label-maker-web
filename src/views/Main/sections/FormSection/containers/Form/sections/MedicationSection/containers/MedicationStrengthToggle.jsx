import React from 'react';
import { connect } from 'react-redux';

import Toggle from '../../../../../../../../../components/Toggle';
import { toggleField } from '../../../../../../../../../redux/actions';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MedicationStrengthToggle);

function mapStateToProps(state) {
  return {
    checked: !state.medicationStrengthIsEnabled,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: () => handleChange(dispatch),
  };
}

function handleChange(dispatch) {
  dispatch(toggleField('medicationStrength'));
}

function MedicationStrengthToggle({ ...restProps }) {
  return (
    <Toggle
      label="None"
      name="medicationStrengthIsDisabled"
      type="switch"
      wrapperClassName="input-group-text pl-5"
      {...restProps}
    />
  );
}
