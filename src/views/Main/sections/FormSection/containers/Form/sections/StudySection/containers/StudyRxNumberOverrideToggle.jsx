import React from 'react';
import { connect } from 'react-redux';

import Toggle from '../../../../../../../../../components/Toggle';
import { toggleField } from '../../../../../../../../../redux/actions';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StudyRxNumberOverrideToggle);

function mapStateToProps(state) {
  return {
    checked: state.studyRxNumberIsEnabled,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: () => handleChange(dispatch),
  };
}

function handleChange(dispatch) {
  dispatch(toggleField('studyRxNumber'));
}

function StudyRxNumberOverrideToggle({ ...restProps }) {
  return (
    <Toggle
      label="Override"
      name="studyRxNumberIsOverridden"
      type="switch"
      wrapperClassName="input-group-text pl-5"
      {...restProps}
    />
  );
}
