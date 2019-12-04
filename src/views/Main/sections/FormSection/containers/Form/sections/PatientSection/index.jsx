import React from 'react';

import AddressFieldset from './components/AddressFieldset';
import NameFieldset from './components/NameFieldset';
import FormSubsection from '../../components/FormSubsection';
import Column from '../../../../../../../../components/Column';
import FormRow from '../../../../../../../../components/FormRow';
import ConnectedInput from '../../../../../../../../containers/ConnectedInput';

export default function PatientSection({ ...restProps }) {
  return (
    <FormSubsection heading="Patient" {...restProps}>
      <NameFieldset />
      <FormRow>
        <Column span={5}>
          <ConnectedInput
            label="Date of birth"
            max="9999-12-31"
            name="patientDateOfBirth"
            required
            type="date"
          />
        </Column>
      </FormRow>
      <AddressFieldset />
    </FormSubsection>
  );
}
