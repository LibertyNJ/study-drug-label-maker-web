import PropTypes from 'prop-types';
import React from 'react';

import FormRow from '../FormRow';
import Input from '../Input';

const NameFieldset = props => (
  <fieldset className="form-group mb-0">
    <legend>Name</legend>
    <FormRow>
      <Input
        type="text"
        name="patientNameLast"
        value={props.last}
        label="Last"
        attributes={{
          placeholder: 'Doe…',
          required: true,
        }}
        handleChange={props.handleFormControlChange}
      />
      <Input
        type="text"
        name="patientNameFirst"
        value={props.first}
        label="First"
        attributes={{
          placeholder: 'John…',
          required: true,
        }}
        handleChange={props.handleFormControlChange}
      />
      <Input
        type="text"
        name="patientNameMiddleInitial"
        value={props.middleInitial}
        label="M.I."
        helpText="Optional"
        attributes={{
          placeholder: 'G…',
          maxLength: 1,
        }}
        handleChange={props.handleFormControlChange}
        wrapperClassName="col-2"
      />
    </FormRow>
  </fieldset>
);

NameFieldset.propTypes = {
  first: PropTypes.string,
  handleFormControlChange: PropTypes.func.isRequired,
  last: PropTypes.string,
  middleInitial: PropTypes.string,
};

NameFieldset.defaultProps = {
  first: undefined,
  last: undefined,
  middleInitial: undefined,
};

export default NameFieldset;
