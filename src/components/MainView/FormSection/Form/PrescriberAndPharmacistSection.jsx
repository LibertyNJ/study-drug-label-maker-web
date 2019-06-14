import PropTypes from 'prop-types';
import React from 'react';

import FormSubsection from './FormSubsection';
import FormRow from './FormRow';
import Input from './Input';

const PrescriberAndPharmacistSection = ({ prescriber, pharmacist, handleFormControlChange }) => (
  <FormSubsection heading="Prescriber and pharmacist">
    <FormRow>
      <Input
        type="text"
        name="prescriber"
        value={prescriber}
        label="Prescriber"
        required
        attributes={{
          placeholder: 'Somebody, MD…',
        }}
        handleChange={handleFormControlChange}
      />
      <Input
        type="text"
        name="pharmacist"
        value={pharmacist}
        label="Pharmacist"
        required
        attributes={{
          placeholder: 'Soandso, RPh…',
        }}
        handleChange={handleFormControlChange}
      />
    </FormRow>
  </FormSubsection>
);

PrescriberAndPharmacistSection.propTypes = {
  handleFormControlChange: PropTypes.func.isRequired,
  pharmacist: PropTypes.string,
  prescriber: PropTypes.string,
};

PrescriberAndPharmacistSection.defaultProps = {
  pharmacist: '',
  prescriber: '',
};

export default PrescriberAndPharmacistSection;
