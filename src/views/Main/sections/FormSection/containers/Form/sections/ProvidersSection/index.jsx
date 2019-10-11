'use-strict';

import React from 'react';

import FormSubsection from '../../components/FormSubsection';
import Column from '../../../../../../../../components/Column';
import FormRow from '../../../../../../../../components/FormRow';
import ConnectedInput from '../../../../../../../../containers/ConnectedInput';

export default function PrescriberAndPharmacistSection({ ...restProps }) {
  return (
    <FormSubsection heading="Providers" {...restProps}>
      <FormRow>
        <Column>
          <ConnectedInput
            label="Prescriber"
            name="prescriberName"
            placeholder="Somebody, MD…"
            required
            type="text"
          />
        </Column>
        <Column>
          <ConnectedInput
            label="Pharmacist"
            name="pharmacistName"
            placeholder="Soandso, RPh…"
            required
            type="text"
          />
        </Column>
      </FormRow>
    </FormSubsection>
  );
}
