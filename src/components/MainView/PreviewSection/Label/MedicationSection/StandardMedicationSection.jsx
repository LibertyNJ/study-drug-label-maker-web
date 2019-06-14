import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from '../LabelRow';
import LabelSection from '../LabelSection';

const StandardMedicationSection = (props) => {
  const name = props.name || 'Medication';
  const strength = !props.strength.isDisabled ? `${props.strength.value || '## mG'} ` : '';
  const form = props.form || 'Form';
  const { manufacturer } = props;
  const quantity = props.quantity || '##';
  const sig = props.sig || 'Sig.';

  return (
    <LabelSection>
      <LabelRow>
        <p className="font-weight-bold">
          {name}, {strength}
          {form}
        </p>
        <p>Mfr: {manufacturer}</p>
      </LabelRow>
      <LabelRow>
        <p>Qty: {quantity}</p>
      </LabelRow>
      <LabelRow>
        <p className="font-italic">{sig}</p>
      </LabelRow>
    </LabelSection>
  );
};

export default StandardMedicationSection;
