import PropTypes from 'prop-types';
import React from 'react';

import FormSubsection from '../FormSubsection';
import FormRow from '../FormRow';
import Input from '../Input';

import AddressFieldset from './AddressFieldset';
import NameFieldset from './NameFieldset';

const PatientSection = ({ patient, handleFormControlChange }) => (
  <FormSubsection heading="Patient">
    <NameFieldset {...patient.name} handleFormControlChange={handleFormControlChange} />
    <FormRow>
      <Input
        type="date"
        name="patientDateOfBirth"
        value={patient.dateOfBirth}
        label="Date of birth"
        attributes={{
          max: '9999-12-31',
          required: true,
        }}
        handleChange={handleFormControlChange}
      />
    </FormRow>
    <AddressFieldset {...patient.address} handleFormControlChange={handleFormControlChange} />
  </FormSubsection>
);

PatientSection.propTypes = {
  handleFormControlChange: PropTypes.func.isRequired,

  patient: PropTypes.shape({
    name: PropTypes.object,
    medicalRecordNumber: PropTypes.string,
    dateOfBirth: PropTypes.string,
  }).isRequired,
};

export default PatientSection;
