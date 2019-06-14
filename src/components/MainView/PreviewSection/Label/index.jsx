import PropTypes from 'prop-types';
import React from 'react';

import InfusionLabel from './InfusionLabel';
import StandardLabel from './StandardLabel';

const Label = (props) => {
  switch (props.labelType) {
    case 'standard':
    case 'syringe':
      return <StandardLabel {...props} />;
    case 'infusion':
      return <InfusionLabel {...props} />;
    default:
      return null;
  }
};

Label.propTypes = {
  labelType: PropTypes.oneOf(['standard', 'infusion', 'syringe', '']),
};

Label.defaultProps = {
  labelType: undefined,
};

export default Label;
