import PropTypes from 'prop-types';
import React from 'react';

import LabelTypeFieldset from './LabelTypeFieldset';
import MedicationSection from './MedicationSection';
import PatientSection from './PatientSection';
import PrescriberAndPharmacistSection from './PrescriberAndPharmacistSection';
import PrintSection from './PrintSection';
import StudySection from './StudySection';

const Form = props => (
  <form className="form overflow-auto px-3 pb-3" onSubmit={props.handleFormSubmit}>
    <LabelTypeFieldset
      labelType={props.labelType}
      handleFormControlChange={props.handleFormControlChange}
    />
    <PatientSection
      patient={props.patient}
      handleFormControlChange={props.handleFormControlChange}
    />
    <StudySection study={props.study} handleFormControlChange={props.handleFormControlChange} />
    <MedicationSection
      labelType={props.labelType}
      medication={props.medication}
      handleFormControlChange={props.handleFormControlChange}
    />
    <PrescriberAndPharmacistSection
      prescriber={props.prescriber}
      pharmacist={props.pharmacist}
      handleFormControlChange={props.handleFormControlChange}
    />
    <PrintSection
      researchPrintPaddingIsDisabled={props.researchPrintPaddingIsDisabled}
      handleFormControlChange={props.handleFormControlChange}
    />
  </form>
);

Form.propTypes = {
  handleFormControlChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  labelType: PropTypes.oneOf(['standard', 'infusion', 'syringe']),
  medication: PropTypes.shape({
    diluent: PropTypes.string,
    expiration: PropTypes.string,
    form: PropTypes.string,
    manufacturer: PropTypes.string,
    name: PropTypes.string,
    preparation: PropTypes.string,
    quantity: PropTypes.string,
    rate: PropTypes.string,
    sig: PropTypes.string,
    strength: PropTypes.object,
    volume: PropTypes.string,
  }).isRequired,
  patient: PropTypes.shape({
    address: PropTypes.object,
    dateOfBirth: PropTypes.string,
    name: PropTypes.object,
  }).isRequired,
  pharmacist: PropTypes.string,
  prescriber: PropTypes.string,
  researchPrintPaddingIsDisabled: PropTypes.bool,
  study: PropTypes.shape({
    patientNumber: PropTypes.string,
    protocol: PropTypes.string,
    rxNumber: PropTypes.object,
  }).isRequired,
};

Form.defaultProps = {
  labelType: undefined,
  pharmacist: undefined,
  prescriber: undefined,
  researchPrintPaddingIsDisabled: false,
};

export default Form;
