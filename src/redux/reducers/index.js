import {
  CHANGE_FIELD,
  CHANGE_LABEL_TYPE,
  PREPARE_LABEL_TO_PRINT,
  TOGGLE_ALTERNATE_PRINT_FORMAT,
  TOGGLE_FIELD,
} from '../actions/types';
import { formatDateAsString, generateRxNumberFromDate } from '../../util';

export const INITIAL_STATE = {
  alternatePrintFormatIsEnabled: false,
  dispensedDate: '',
  facilityCity: '',
  facilityDeaNumber: '',
  facilityName: '',
  facilityPhone: '',
  facilityState: '',
  facilityStreet: '',
  facilityZip: '',
  labelType: '',
  medicationDiluent: '',
  medicationExpirationDate: '',
  medicationForm: '',
  medicationManufacturer: '',
  medicationName: '',
  medicationPreparationDate: '',
  medicationQuantity: '',
  medicationRate: '',
  medicationSig: '',
  medicationStrength: '',
  medicationStrengthIsEnabled: true,
  medicationVolume: '',
  patientAddressLine1: '',
  patientAddressLine2: '',
  patientCity: '',
  patientDateOfBirth: '',
  patientFirstName: '',
  patientLastName: '',
  patientMiddleInitial: '',
  patientState: '',
  patientZip: '',
  pharmacistName: '',
  prescriberName: '',
  studyPatientNumber: '',
  studyProtocol: '',
  studyRxNumber: '',
  studyRxNumberIsEnabled: false,
};

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_LABEL_TYPE:
      return {
        ...state,
        labelType: action.value,
      };
    case PREPARE_LABEL_TO_PRINT:
      return {
        ...state,
        dispensedDate: formatDateAsString(action.date),
        studyRxNumber: state.studyRxNumberIsEnabled
          ? state.studyRxNumber
          : generateRxNumberFromDate(action.date),
      };
    case TOGGLE_ALTERNATE_PRINT_FORMAT:
      return {
        ...state,
        alternatePrintFormatIsEnabled: !state.alternatePrintFormatIsEnabled,
      };
    case TOGGLE_FIELD:
      return {
        ...state,
        [action.name]: state[`${action.name}IsEnabled`]
          ? INITIAL_STATE[action.name]
          : state[action.name],
        [`${action.name}IsEnabled`]: !state[`${action.name}IsEnabled`],
      };
    default:
      return state;
  }
}
