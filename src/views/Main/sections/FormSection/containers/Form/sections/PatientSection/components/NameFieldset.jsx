'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import Column from '../../../../../../../../../components/Column';
import FormRow from '../../../../../../../../../components/FormRow';
import ConnectedInput from '../../../../../../../../../containers/ConnectedInput';
import { reduceClassNames } from '../../../../../../../../../util';

NameFieldset.propTypes = {
  className: PropTypes.string,
};

export default function NameFieldset({ className, ...restProps }) {
  return (
    <fieldset className={reduceClassNames('form-group', className)} {...restProps}>
      <legend>Name</legend>
      <FormRow>
        <Column>
          <ConnectedInput
            label="Last"
            name="patientLastName"
            placeholder="Doe…"
            required
            type="text"
          />
        </Column>
        <Column>
          <ConnectedInput
            label="First"
            name="patientFirstName"
            placeholder="John…"
            required
            type="text"
          />
        </Column>
        <Column span={2}>
          <ConnectedInput
            info="Optional"
            label="M.I."
            maxLength={1}
            name="patientMiddleInitial"
            placeholder="G…"
            type="text"
          />
        </Column>
      </FormRow>
    </fieldset>
  );
}
