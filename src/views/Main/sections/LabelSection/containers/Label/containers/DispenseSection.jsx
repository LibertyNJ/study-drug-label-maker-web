import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LabelRow from '../components/LabelRow';
import { formatDatetimeString } from '../../../../../../../util';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DispenseSection);

function mapStateToProps(state) {
  return {
    dispensedDate: state.dispensedDate,
  };
}

function mapDispatchToProps() {
  return {};
}

DispenseSection.propTypes = {
  dispensedDate: PropTypes.string.isRequired,
};

function DispenseSection({ dispensedDate, ...restProps }) {
  return (
    <section {...restProps}>
      <LabelRow>
        <p>Dispensed by: ____</p>
        <p>Received by: ____</p>
      </LabelRow>
      <LabelRow>
        <p>Dispensed: {dispensedDate ? formatDatetimeString(dispensedDate) : 'MM/DD/YYYY hh:mm'}</p>
      </LabelRow>
    </section>
  );
}
