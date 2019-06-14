import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';
import FormRow from './FormRow';
import FormSubsection from './FormSubsection';
import Toggle from './Toggle';

const PrintSection = ({ researchPrintPaddingIsDisabled, handleFormControlChange }) => (
  <FormSubsection heading="Print">
    <FormRow>
      <Toggle
        type="switch"
        name="researchPrintPaddingIsDisabled"
        checked={researchPrintPaddingIsDisabled}
        label="Main pharmacy print format"
        handleChange={handleFormControlChange}
      />
      <Button
        type="submit"
        text="Print"
        iconType="print"
        bootstrapColor="primary"
        className="btn-lg d-block ml-auto"
      />
    </FormRow>
  </FormSubsection>
);

PrintSection.propTypes = {
  handleFormControlChange: PropTypes.func.isRequired,
  researchPrintPaddingIsDisabled: PropTypes.bool,
};

PrintSection.defaultProps = {
  researchPrintPaddingIsDisabled: false,
};

export default PrintSection;
