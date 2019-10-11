'use-strict';

import {
  changeField,
  changeLabelType,
  prepareLabelToPrint,
  toggleAlternatePrintFormat,
  toggleField,
} from './index';
import {
  CHANGE_FIELD,
  CHANGE_LABEL_TYPE,
  PREPARE_LABEL_TO_PRINT,
  TOGGLE_ALTERNATE_PRINT_FORMAT,
  TOGGLE_FIELD,
} from './types';

describe('changeField(name, value)', () => {
  test('Returns an object of type CHANGE_FIELD with correct properties.', () => {
    expect(changeField('foo', 'bar')).toEqual({
      name: 'foo',
      type: CHANGE_FIELD,
      value: 'bar',
    });
  });
});

describe('changeLabelType(value)', () => {
  test('Returns an object of type CHANGE_LABEL_TYPE with correct properties.', () => {
    expect(changeLabelType('foo')).toEqual({
      type: CHANGE_LABEL_TYPE,
      value: 'foo',
    });
  });
});

describe('prepareLabelToPrint(date)', () => {
  test('Returns an object of type PREPARE_LABEL_TO_PRINT with correct properties.', () => {
    const date = new Date();
    expect(prepareLabelToPrint(date)).toEqual({
      date,
      type: PREPARE_LABEL_TO_PRINT,
    });
  });
});

describe('toggleAlternatePrintFormat()', () => {
  test('Returns an object of type TOGGLE_ALTERNATE_PRINT_FORMAT.', () => {
    expect(toggleAlternatePrintFormat()).toEqual({
      type: TOGGLE_ALTERNATE_PRINT_FORMAT,
    });
  });
});

describe('toggleField(name)', () => {
  test('Returns an object of type TOGGLE_FIELD with correct properties.', () => {
    expect(toggleField('foo')).toEqual({
      name: 'foo',
      type: TOGGLE_FIELD,
    });
  });
});
