import {
  CHANGE_FIELD,
  CHANGE_LABEL_TYPE,
  PREPARE_LABEL_TO_PRINT,
  TOGGLE_ALTERNATE_PRINT_FORMAT,
  TOGGLE_FIELD,
} from './types';

export function changeField(name, value) {
  return {
    name,
    type: CHANGE_FIELD,
    value,
  };
}

export function changeLabelType(value) {
  return {
    type: CHANGE_LABEL_TYPE,
    value,
  };
}

export function prepareLabelToPrint(date) {
  return {
    date,
    type: PREPARE_LABEL_TO_PRINT,
  };
}

export function printLabel(date) {
  return async (dispatch) => {
    await dispatch(prepareLabelToPrint(date));
    window.print();
  };
}

export function toggleAlternatePrintFormat() {
  return {
    type: TOGGLE_ALTERNATE_PRINT_FORMAT,
  };
}

export function toggleField(name) {
  return {
    name,
    type: TOGGLE_FIELD,
  };
}
