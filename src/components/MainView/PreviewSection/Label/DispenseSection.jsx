import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from './LabelRow';
import LabelSection from './LabelSection';

import { formatDatetimeString } from '../../../../utils';

const DispenseSection = (props) => {
  const dispensed = props.dispensed ? formatDatetimeString(props.dispensed) : 'MM/DD/YYYY hh:mm';

  return (
    <LabelSection className="mt-1">
      <LabelRow>
        <p>Dispensed by: ____</p>
        <p>Received by: ____</p>
      </LabelRow>
      <LabelRow>
        <p>Dispensed: {dispensed}</p>
      </LabelRow>
    </LabelSection>
  );
};

DispenseSection.propTypes = {
  dispensed: PropTypes.string,
};

DispenseSection.defaultProps = {
  dispensed: undefined,
};

export default DispenseSection;
