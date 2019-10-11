'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import LabelTypeRadioButton from './containers/LabelTypeRadioButton';
import Column from '../../../../../../../../components/Column';
import FormRow from '../../../../../../../../components/FormRow';
import { reduceClassNames } from '../../../../../../../../util';

LabelTypeFieldset.propTypes = {
  className: PropTypes.string,
};

export default function LabelTypeFieldset({ className, ...restProps }) {
  return (
    <fieldset className={reduceClassNames('form-group', className)} {...restProps}>
      <legend>Label type</legend>
      <FormRow>
        <Column>
          <LabelTypeRadioButton
            label="Standard"
            name="labelType"
            required
            value="standard"
            wrapperClassName="custom-control-inline"
          />
          <LabelTypeRadioButton
            label="Infusion"
            name="labelType"
            required
            value="infusion"
            wrapperClassName="custom-control-inline"
          />
          <LabelTypeRadioButton
            label="Syringe"
            name="labelType"
            required
            value="syringe"
            wrapperClassName="custom-control-inline"
          />
        </Column>
      </FormRow>
    </fieldset>
  );
}
