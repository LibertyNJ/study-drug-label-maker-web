'use-strict';

import React from 'react';
import { connect } from 'react-redux';

import Toggle from '../../../../../../../../../components/Toggle';
import { toggleAlternatePrintFormat } from '../../../../../../../../../redux/actions';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlternatePrintFormatToggle);

function mapStateToProps(state) {
  return {
    checked: state.alternatePrintFormatIsEnabled,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: () => handleChange(dispatch),
  };
}

function handleChange(dispatch) {
  dispatch(toggleAlternatePrintFormat());
}

function AlternatePrintFormatToggle({ ...restProps }) {
  return (
    <Toggle label="Alternate print format" name="printFormatToggle" type="switch" {...restProps} />
  );
}
