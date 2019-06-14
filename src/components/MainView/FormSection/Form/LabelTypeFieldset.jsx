import PropTypes from 'prop-types';
import React from 'react';

import FormRow from './FormRow';
import Toggle from './Toggle';

const LabelTypeFieldset = ({ labelType, handleFormControlChange }) => (
  <fieldset className="form-group">
    <legend>Label type</legend>
    <FormRow>
      <Toggle
        type="radio"
        name="labelType"
        value="standard"
        checked={labelType === 'standard'}
        label="Standard"
        handleChange={handleFormControlChange}
        wrapperClassName="custom-control-inline"
      />
      <Toggle
        type="radio"
        name="labelType"
        value="infusion"
        checked={labelType === 'infusion'}
        label="Infusion"
        handleChange={handleFormControlChange}
        wrapperClassName="custom-control-inline"
      />
      <Toggle
        type="radio"
        name="labelType"
        value="syringe"
        checked={labelType === 'syringe'}
        label="Syringe"
        handleChange={handleFormControlChange}
        wrapperClassName="custom-control-inline"
      />
    </FormRow>
  </fieldset>
);

LabelTypeFieldset.propTypes = {
  handleFormControlChange: PropTypes.func.isRequired,
  labelType: PropTypes.oneOf(['standard', 'infusion', 'syringe']),
};

LabelTypeFieldset.defaultProps = {
  labelType: undefined,
};

export default LabelTypeFieldset;
