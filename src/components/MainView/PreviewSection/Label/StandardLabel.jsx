import React from 'react';
import PropTypes from 'prop-types';

import DispenseSection from './DispenseSection';
import LabelHeader from './LabelHeader';
import MedicationSection from './MedicationSection';
import PatientSection from './PatientSection';
import PrescriberPharmacistSection from './PrescriberAndPharmacistSection';
import StudySection from './StudySection';

const StandardLabel = (props) => {
  const researchPrintPaddingClass = !props.researchPrintPaddingIsDisabled
    ? ' label--research-padding'
    : '';

  return (
    <article className={`label label--standard${researchPrintPaddingClass}`}>
      <div className="label__body d-flex flex-column">
        <LabelHeader />
        <PatientSection {...props.patient} />
        <StudySection {...props.study} />
        <MedicationSection {...props.medication} labelType={props.labelType} />
        <PrescriberPharmacistSection prescriber={props.prescriber} pharmacist={props.pharmacist} />
        <footer className="mt-auto">
          <DispenseSection dispensed={props.dispensed} />
        </footer>
      </div>
    </article>
  );
};

StandardLabel.propTypes = {
  dispensed: PropTypes.string,
  labelType: PropTypes.oneOf(['standard', 'infusion', 'syringe']),
  medication: PropTypes.shape({
    diluent: PropTypes.string,
    expiration: PropTypes.string,
    form: PropTypes.string,
    quantity: PropTypes.string,
    manufacturer: PropTypes.string,
    name: PropTypes.string,
    preparation: PropTypes.string,
    rate: PropTypes.string,
    sig: PropTypes.string,
    strength: PropTypes.object,
    volume: PropTypes.string,
  }).isRequired,
  patient: PropTypes.shape({
    address: PropTypes.object,
    dob: PropTypes.string,
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

StandardLabel.defaultProps = {
  dispensed: undefined,
  labelType: undefined,
  pharmacist: undefined,
  prescriber: undefined,
  researchPrintPaddingIsDisabled: false,
};

export default StandardLabel;
