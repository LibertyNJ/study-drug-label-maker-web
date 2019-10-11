'use-strict';

import { connect } from 'react-redux';

import Input from '../../components/Input';
import { changeField } from '../../redux/actions';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);

function mapStateToProps(state, { name }) {
  return {
    disabled: getDisabledByName(state, name),
    value: getValueByName(state, name),
  };
}

function getDisabledByName(state, rootName) {
  const name = `${rootName}IsEnabled`;
  return Object.prototype.hasOwnProperty.call(state, name) ? !state[name] : false;
}

function getValueByName(state, name) {
  return state[name];
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: event => handleChange(event, dispatch),
  };
}

function handleChange({ target: { name, value } }, dispatch) {
  dispatch(changeField(name, value));
}
