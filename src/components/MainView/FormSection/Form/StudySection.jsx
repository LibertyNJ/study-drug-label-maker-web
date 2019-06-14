import PropTypes from 'prop-types';
import React from 'react';

import Input from './Input';
import FormRow from './FormRow';
import FormSubsection from './FormSubsection';
import Toggle from './Toggle';

const StudySection = ({ study, handleFormControlChange }) => {
  const rxNumberOverrideToggle = (
    <Toggle
      type="switch"
      name="studyRxNumberIsOverridden"
      checked={study.rxNumber.isOverridden}
      label="Override"
      handleChange={handleFormControlChange}
      wrapperClassName="input-group-text"
      labelClassName="ml-2"
    />
  );

  return (
    <FormSubsection heading="Study">
      <FormRow>
        <Input
          type="text"
          name="studyProtocol"
          value={study.protocol}
          label="Protocol"
          required
          attributes={{
            placeholder: 'D3561C00009…',
          }}
          handleChange={handleFormControlChange}
        />
        <Input
          type="text"
          name="studyPatientNumber"
          value={study.patientNumber}
          label="Patient number"
          required
          attributes={{
            placeholder: '002806…',
          }}
          handleChange={handleFormControlChange}
        />
      </FormRow>
      <FormRow>
        <Input
          type="text"
          name="studyRxNumber"
          value={study.rxNumber.value}
          label="Rx number"
          required={study.rxNumber.isOverridden}
          disabled={!study.rxNumber.isOverridden}
          attributes={{
            placeholder: '20181203112556…',
          }}
          handleChange={handleFormControlChange}
          helpText="Generated when label is printed."
          append={rxNumberOverrideToggle}
        />
      </FormRow>
    </FormSubsection>
  );
};

StudySection.propTypes = {
  handleFormControlChange: PropTypes.func.isRequired,
  study: PropTypes.shape({
    patientNumber: PropTypes.string,
    protocol: PropTypes.string,
    rxNumber: PropTypes.object,
  }).isRequired,
};

export default StudySection;
