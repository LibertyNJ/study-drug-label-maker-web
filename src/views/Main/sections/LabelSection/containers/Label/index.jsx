'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import InfusionLabel from './containers/InfusionLabel';
import StandardLabel from './containers/StandardLabel';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Label);

function mapStateToProps(state) {
  return {
    labelType: state.labelType,
  };
}

function mapDispatchToProps() {
  return {};
}

Label.propTypes = {
  labelType: PropTypes.oneOf(['standard', 'infusion', 'syringe', '']),
};

function Label({ labelType, ...restProps }) {
  switch (labelType) {
    case 'infusion':
      return <InfusionLabel {...restProps} />;
    case 'standard':
    case 'syringe':
      return <StandardLabel {...restProps} />;
    default:
      return null;
  }
}
