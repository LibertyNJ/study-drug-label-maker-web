import PropTypes from 'prop-types';
import React from 'react';

import Column from '../../../../../../../../../components/Column';
import FormRow from '../../../../../../../../../components/FormRow';
import ConnectedInput from '../../../../../../../../../containers/ConnectedInput';
import { reduceClassNames } from '../../../../../../../../../util';

AddressFieldset.propTypes = {
  className: PropTypes.string,
};

export default function AddressFieldset({ className, ...restProps }) {
  return (
    <fieldset className={reduceClassNames('form-group', className)} {...restProps}>
      <legend>Address</legend>
      <FormRow>
        <Column>
          <ConnectedInput
            label="Line 1"
            name="patientAddressLine1"
            placeholder="123 Any Street…"
            required
            type="text"
          />
        </Column>
      </FormRow>
      <FormRow>
        <Column>
          <ConnectedInput
            info="Optional"
            label="Line 2"
            name="patientAddressLine2"
            placeholder="Apt. ABC…"
            type="text"
          />
        </Column>
      </FormRow>
      <FormRow>
        <Column span={6}>
          <ConnectedInput
            label="City"
            name="patientCity"
            placeholder="Anytown…"
            required
            type="text"
          />
        </Column>
        <Column span={2}>
          <ConnectedInput
            label="State"
            maxLength={2}
            name="patientState"
            placeholder="NY…"
            required
            type="text"
          />
        </Column>
        <Column span={4}>
          <ConnectedInput
            label="ZIP"
            maxLength={5}
            name="patientZip"
            placeholder="12345…"
            required
            type="text"
          />
        </Column>
      </FormRow>
    </fieldset>
  );
}
