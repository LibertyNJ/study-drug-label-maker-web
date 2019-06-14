import PropTypes from 'prop-types';
import React from 'react';

import FormRow from '../FormRow';
import Input from '../Input';

const AddressFieldset = props => (
  <fieldset className="form-group mb-0">
    <legend>Address</legend>
    <FormRow>
      <Input
        type="text"
        name="patientAddress1"
        value={props.street}
        label="Street"
        required
        attributes={{
          placeholder: '123 Any Street…',
        }}
        handleChange={props.handleFormControlChange}
      />
    </FormRow>
    <FormRow>
      <Input
        type="text"
        name="patientAddress2"
        value={props.apartment}
        label="Apartment"
        info="Optional"
        attributes={{
          placeholder: 'Apt. ABC…',
        }}
        handleChange={props.handleFormControlChange}
      />
    </FormRow>
    <FormRow className="form-row">
      <Input
        type="text"
        name="patientCity"
        value={props.city}
        label="City"
        required
        attributes={{
          placeholder: 'Anytown…',
        }}
        handleChange={props.handleFormControlChange}
        className="col-6"
      />
      <Input
        type="text"
        name="patientState"
        value={props.state}
        label="State"
        required
        attributes={{
          placeholder: 'NY…',
          maxLength: 2,
        }}
        handleChange={props.handleFormControlChange}
        className="col-2"
      />
      <Input
        type="text"
        name="patientZip"
        value={props.zip}
        label="ZIP"
        required
        attributes={{
          placeholder: '12345…',
          maxLength: 5,
        }}
        handleChange={props.handleFormControlChange}
        className="col-4"
      />
    </FormRow>
  </fieldset>
);

AddressFieldset.propTypes = {
  apartment: PropTypes.string,
  city: PropTypes.string,
  handleFormControlChange: PropTypes.func.isRequired,
  state: PropTypes.string,
  street: PropTypes.string,
  zip: PropTypes.string,
};

AddressFieldset.defaultProps = {
  apartment: undefined,
  city: undefined,
  state: undefined,
  street: undefined,
  zip: undefined,
};

export default AddressFieldset;
