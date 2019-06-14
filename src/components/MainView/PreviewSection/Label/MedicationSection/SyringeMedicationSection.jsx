import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from '../LabelRow';
import LabelSection from '../LabelSection';

import { formatDatetimeString } from '../../../../../utils';

const SyringeMedicationSection = (props) => {
  const name = props.name || 'Medication';
  const strength = !props.strength.isDisabled ? `${props.strength.value || '## mG'} / ` : '';
  const volume = props.volume || '## mL';
  const { manufacturer } = props;
  const sig = props.sig || 'Sig.';
  const preparation = props.preparation
    ? formatDatetimeString(props.preparation)
    : 'MM/DD/YYYY hh:mm';
  const expiration = props.expiration ? formatDatetimeString(props.expiration) : 'MM/DD/YYYY hh:mm';

  return (
    <LabelSection>
      <LabelRow>
        <p className="font-weight-bold">
          {name}, {strength}
          {volume} Syringe
        </p>
        <p>Mfr: {manufacturer}</p>
      </LabelRow>
      <LabelRow>
        <p className="font-italic">{sig}</p>
      </LabelRow>
      <LabelRow>
        <p>Prep: {preparation}</p>
        <p className="font-weight-bold">Exp: {expiration}</p>
      </LabelRow>
    </LabelSection>
  );
};

export default SyringeMedicationSection;
