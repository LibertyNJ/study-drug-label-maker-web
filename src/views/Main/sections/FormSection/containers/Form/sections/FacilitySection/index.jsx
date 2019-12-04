import React from 'react';

import FormSubsection from '../../components/FormSubsection';
import Column from '../../../../../../../../components/Column';
import FormRow from '../../../../../../../../components/FormRow';
import ConnectedInput from '../../../../../../../../containers/ConnectedInput';

export default function FacilitySection({ ...restProps }) {
  return (
    <FormSubsection heading="Facility" {...restProps}>
      <FormRow>
        <Column>
          <ConnectedInput
            label="Name"
            name="facilityName"
            placeholder="Facility name…"
            required
            type="text"
          />
        </Column>
      </FormRow>
      <fieldset className="form-group">
        <legend>Address</legend>
        <FormRow>
          <Column>
            <ConnectedInput
              label="Street"
              name="facilityStreet"
              placeholder="123 Some Street…"
              required
              type="text"
            />
          </Column>
        </FormRow>
        <FormRow>
          <Column span={7}>
            <ConnectedInput
              label="City"
              name="facilityCity"
              placeholder="Anytown…"
              required
              type="text"
            />
          </Column>
          <Column span={2}>
            <ConnectedInput
              label="State"
              maxLength={2}
              name="facilityState"
              pattern="^\w{2}$"
              placeholder="ST…"
              required
              type="text"
            />
          </Column>
          <Column span={3}>
            <ConnectedInput
              label="Zip"
              name="facilityZip"
              pattern="^\d{5}$"
              placeholder="12345…"
              required
              type="text"
            />
          </Column>
        </FormRow>
      </fieldset>
      <FormRow>
        <Column span={6}>
          <ConnectedInput
            label="DEA number"
            maxLength={9}
            name="facilityDeaNumber"
            pattern="^[A-X][A-Z9]\d{7}$"
            placeholder="AB0123456…"
            required
            type="text"
          />
        </Column>
        <Column span={6}>
          <ConnectedInput
            label="Phone number"
            maxLength={13}
            name="facilityPhone"
            pattern="^(\(\d{3}\)|\d{3}-)\d{3}-\d{4}$"
            placeholder="(123)456-7890…"
            required
            type="tel"
          />
        </Column>
      </FormRow>
    </FormSubsection>
  );
}
