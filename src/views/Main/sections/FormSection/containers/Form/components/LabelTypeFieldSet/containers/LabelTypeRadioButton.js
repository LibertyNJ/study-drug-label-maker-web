import { connect } from 'react-redux';

import RadioButton from '../../../../../../../../../components/RadioButton';
import { changeLabelType } from '../../../../../../../../../redux/actions';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RadioButton);

function mapStateToProps(state, { value }) {
  return {
    checked: state.labelType === value,
  };
}

function mapDispatchToProps(dispatch, { value }) {
  return {
    onChange: () => handleChange(dispatch, value),
  };
}

function handleChange(dispatch, value) {
  dispatch(changeLabelType(value));
}
