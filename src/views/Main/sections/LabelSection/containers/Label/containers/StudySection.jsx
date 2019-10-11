'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LabelRow from '../components/LabelRow';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StudySection);

function mapStateToProps(state) {
  return {
    patientNumber: state.studyPatientNumber,
    protocol: state.studyProtocol,
    rxNumber: state.studyRxNumber,
  };
}

function mapDispatchToProps() {
  return {};
}

StudySection.propTypes = {
  patientNumber: PropTypes.string.isRequired,
  protocol: PropTypes.string.isRequired,
  rxNumber: PropTypes.string.isRequired,
};

function StudySection({
  patientNumber, protocol, rxNumber, ...restProps
}) {
  return (
    <section {...restProps}>
      <LabelRow>
        <p>Protocol: {protocol}</p>
        <p>Rx #: {rxNumber}</p>
      </LabelRow>
      <LabelRow>
        <p>Patient #: {patientNumber}</p>
      </LabelRow>
    </section>
  );
}
