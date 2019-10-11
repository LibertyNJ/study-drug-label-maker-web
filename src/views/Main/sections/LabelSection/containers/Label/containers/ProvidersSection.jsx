'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LabelRow from '../components/LabelRow';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProvidersSection);

function mapStateToProps(state) {
  return {
    pharmacist: state.pharmacistName,
    prescriber: state.prescriberName,
  };
}

function mapDispatchToProps() {
  return {};
}

ProvidersSection.propTypes = {
  pharmacist: PropTypes.string.isRequired,
  prescriber: PropTypes.string.isRequired,
};

function ProvidersSection({ prescriber, pharmacist, ...restProps }) {
  return (
    <section {...restProps}>
      <LabelRow>
        <p>Prescriber: {prescriber}</p>
        <p>RPh: {pharmacist}</p>
      </LabelRow>
    </section>
  );
}
