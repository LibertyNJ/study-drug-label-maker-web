'use-strict';

import rootReducer, { INITIAL_STATE } from './index';
import {
  CHANGE_FIELD,
  CHANGE_LABEL_TYPE,
  PREPARE_LABEL_TO_PRINT,
  TOGGLE_ALTERNATE_PRINT_FORMAT,
  TOGGLE_FIELD,
} from '../actions/types';
import { formatDateAsString, generateRxNumberFromDate } from '../../util';

describe('rootReducer(state, action)', () => {
  test('Returns initial state.', () => {
    const action = {};
    const state = undefined;
    expect(rootReducer(state, action)).toEqual(INITIAL_STATE);
  });

  describe('Handles CHANGE_FIELD action.', () => {
    const action = {
      name: 'medicationStrength',
      type: CHANGE_FIELD,
      value: 'foo',
    };
    test('Returns state with set name/value pair.', () => {
      const state = INITIAL_STATE;
      expect(rootReducer(state, action)).toEqual({
        ...INITIAL_STATE,
        medicationStrength: 'foo',
      });
    });
  });

  describe('Handles CHANGE_LABEL_TYPE action.', () => {
    const action = {
      type: CHANGE_LABEL_TYPE,
      value: 'foo',
    };
    test('Returns state with labelType set to passed value.', () => {
      const state = INITIAL_STATE;
      expect(rootReducer(state, action)).toEqual({
        ...INITIAL_STATE,
        labelType: 'foo',
      });
    });
  });

  describe('Handles PREPARE_LABEL_TO_PRINT action.', () => {
    const date = new Date();
    const action = {
      date,
      type: PREPARE_LABEL_TO_PRINT,
    };
    test('Returns state with with dispensedDate derived from passed date.', () => {
      const dispensedDate = formatDateAsString(date);
      const state = INITIAL_STATE;
      expect(rootReducer(state, action)).toHaveProperty('dispensedDate', dispensedDate);
    });
    test('Returns state with with studyRxNumber derived from passed date when passed state with studyRxNumberIsEnabled is set to false.', () => {
      const state = {
        ...INITIAL_STATE,
        studyRxNumberIsEnabled: false,
      };
      const studyRxNumber = generateRxNumberFromDate(date);
      expect(rootReducer(state, action)).toHaveProperty('studyRxNumber', studyRxNumber);
    });
    test('Returns state with with studyRxNumber preserved from passed state with studyRxNumberIsEnabled is set to true.', () => {
      const studyRxNumber = '201910101052';
      const state = {
        ...INITIAL_STATE,
        studyRxNumber,
        studyRxNumberIsEnabled: true,
      };
      expect(rootReducer(state, action)).toHaveProperty('studyRxNumber', studyRxNumber);
    });
  });

  describe('Handles TOGGLE_ALTERNATE_PRINT_FORMAT action.', () => {
    const action = {
      type: TOGGLE_ALTERNATE_PRINT_FORMAT,
    };
    test('Returns state with alternatePrintFormatIsEnabled set to true when passed state with alternatePrintFormatIsEnabled set to false.', () => {
      const state = {
        ...INITIAL_STATE,
        alternatePrintFormatIsEnabled: false,
      };
      expect(rootReducer(state, action)).toEqual({
        ...INITIAL_STATE,
        alternatePrintFormatIsEnabled: true,
      });
    });
    test('Returns state with alternatePrintFormatIsEnabled set to false when passed state with alternatePrintFormatIsEnabled set to true.', () => {
      const state = {
        ...INITIAL_STATE,
        alternatePrintFormatIsEnabled: true,
      };
      expect(rootReducer(state, action)).toEqual({
        ...INITIAL_STATE,
        alternatePrintFormatIsEnabled: false,
      });
    });
  });

  describe('Handles TOGGLE_FIELD action.', () => {
    const action = {
      name: 'medicationStrength',
      type: TOGGLE_FIELD,
    };
    test('Returns state with <property>IsEnabled set to false and initial <property> value when passed state with <property>IsEnabled set to true.', () => {
      const state = {
        ...INITIAL_STATE,
        medicationStrength: 'foo',
        medicationStrengthIsEnabled: true,
      };
      expect(rootReducer(state, action)).toEqual({
        ...INITIAL_STATE,
        medicationStrength: INITIAL_STATE.medicationStrength,
        medicationStrengthIsEnabled: false,
      });
    });
    test('Returns state with <property>IsEnabled set to true when passed state with <property>IsEnabled set to false.', () => {
      const state = {
        ...INITIAL_STATE,
        medicationStrengthIsEnabled: false,
      };
      expect(rootReducer(state, action)).toEqual({
        ...INITIAL_STATE,
        medicationStrengthIsEnabled: true,
      });
    });
  });
});
