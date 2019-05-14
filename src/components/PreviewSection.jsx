import React from 'react';
import PropTypes from 'prop-types';

const getFormattedDateString = (dateString, formatObject) =>
  new Date(dateString).toLocaleString('en-US', formatObject);

const getFormattedNumberString = (numberString, formatObject) =>
  Number(numberString).toLocaleString('en-US', formatObject);

const Preview = props => (
  <section
    id="preview-section"
    className="col d-flex flex-column d-print-block"
  >
    <header className="d-print-none">
      <h2 className="text-primary">Preview</h2>
    </header>
    <div className="flex-grow-1 overflow-auto">
      <Label {...props} />
    </div>
  </section>
);

const Label = props => {
  const researchPrintPaddingClass = props.researchPrintFormatIsEnabled
    ? ' label--research-padding'
    : '';

  switch (props.labelType) {
    case 'standard':
    case 'syringe':
      return (
        <article
          className={`label label--standard${researchPrintPaddingClass}`}
        >
          <div className="label__body d-flex flex-column">
            <LabelHeader />
            <PatientSection {...props.patient} />
            <StudySection {...props.study} />
            <MedicationSection
              {...props.medication}
              labelType={props.labelType}
            />
            <PrescriberPharmacistSection
              prescriber={props.prescriber}
              pharmacist={props.pharmacist}
            />
            <footer className="mt-auto">
              <DispenseSection dispensed={props.dispensed} />
            </footer>
          </div>
        </article>
      );

    case 'infusion':
      return (
        <article
          className={`label label--infusion${researchPrintPaddingClass}`}
        >
          <div className="label__body">
            <div className="label__upper-half">
              <LabelHeader />
              <PatientSection {...props.patient} />
              <StudySection {...props.study} />
              <MedicationSection
                {...props.medication}
                labelType={props.labelType}
              />
              <PrescriberPharmacistSection
                prescriber={props.prescriber}
                pharmacist={props.pharmacist}
              />
            </div>
            <div className="label__lower-half">
              <DispenseSection dispensed={props.dispensed} />
            </div>
          </div>
        </article>
      );

    default:
      return (
        <div className="alert alert-info" role="alert">
          Please select a label type.
        </div>
      );
  }
};

Label.propTypes = {
  labelType: PropTypes.oneOf(['standard', 'infusion', 'syringe', '']),

  patient: PropTypes.shape({
    name: PropTypes.object,
    dob: PropTypes.string,
    address: PropTypes.object,
  }),

  study: PropTypes.shape({
    protocol: PropTypes.string,
    rxNumber: PropTypes.object,
    patientNumber: PropTypes.string,
  }),

  medication: PropTypes.shape({
    name: PropTypes.string,
    strength: PropTypes.object,
    form: PropTypes.string,
    diluent: PropTypes.string,
    volume: PropTypes.string,
    rate: PropTypes.string,
    manufacturer: PropTypes.string,
    quantity: PropTypes.string,
    sig: PropTypes.string,
    preparation: PropTypes.string,
    expiration: PropTypes.string,
  }),

  prescriber: PropTypes.string,
  pharmacist: PropTypes.string,
  dispensed: PropTypes.string,
  researchPrintFormatIsEnabled: PropTypes.bool.isRequired,
};

Label.defaultProps = {
  labelType: '',

  patient: PropTypes.shape({
    name: PropTypes.object,
    dob: '',
    address: PropTypes.object,
  }),

  study: PropTypes.shape({
    protocol: '',
    rxNumber: PropTypes.object,
    patientNumber: '',
  }),

  medication: PropTypes.shape({
    name: '',
    strength: PropTypes.object,
    form: '',
    diluent: '',
    volume: '',
    rate: '',
    manufacturer: '',
    quantity: '',
    sig: '',
    preparation: '',
    expiration: '',
  }),

  prescriber: '',
  pharmacist: '',
  dispensed: '',
};

const LabelHeader = () => (
  <header>
    <p className="text-center font-weight-bold">
      North Shore University Hospital — Pharmacy Department
    </p>
    <div className="d-flex justify-content-between m-0">
      <p>
        300 Community Drive
        <br />
        Manhasset, NY 11030
      </p>
      <p>
        DEA# AN0768917
        <br />
        (516)562-4700
      </p>
    </div>
  </header>
);

const PatientSection = props => {
  const dateFormat = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  };

  const name = {
    last: props.name.last ? props.name.last : 'Last name',
    first: props.name.first ? props.name.first : 'First name',
    mi: props.name.mi ? `${props.name.mi}.` : '',
  };

  const dob = props.dob
    ? getFormattedDateString(`${props.dob}T00:00:00`, dateFormat)
    : 'MM/DD/YYYY';

  const address = {
    street: props.address.street ? props.address.street : 'Street',
    apartment: props.address.apartment ? props.address.apartment : '',
    city: props.address.city ? props.address.city : 'City',
    state: props.address.state ? props.address.state : 'ST',
    zip: props.address.zip ? props.address.zip : '#####',
  };

  return (
    <section className="mb-1">
      <div className="d-flex justify-content-between m-0">
        <p className="font-weight-bold">
          {name.last}, {name.first} {name.mi}
        </p>
        <p>DoB: {dob}</p>
      </div>
      <div className="d-flex justify-content-between m-0">
        <p>
          {address.street}, {address.apartment}
          <br />
          {address.city}, {address.state} {address.zip}
        </p>
      </div>
    </section>
  );
};

PatientSection.propTypes = {
  name: PropTypes.shape({
    last: PropTypes.string,
    first: PropTypes.string,
    mi: PropTypes.string,
  }).isRequired,

  dob: PropTypes.string,

  address: PropTypes.shape({
    street: PropTypes.string,
    apartment: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  }).isRequired,
};

PatientSection.defaultProps = {
  dob: '',
};

const StudySection = props => (
  <section className="mb-1">
    <div className="d-flex justify-content-between m-0">
      <p>Protocol: {props.protocol}</p>
      <p>Rx #: {props.rxNumber.value}</p>
    </div>
    <p>Patient #: {props.patientNumber}</p>
  </section>
);

StudySection.propTypes = {
  protocol: PropTypes.string,
  patientNumber: PropTypes.string,

  rxNumber: PropTypes.shape({
    value: PropTypes.string,
    isOverridden: PropTypes.bool,
  }).isRequired,
};

StudySection.defaultProps = {
  protocol: '',
  patientNumber: '',
};

const MedicationSection = props => {
  const numberFormat = {
    useGrouping: true,
  };

  const dateFormat = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  const name = props.name ? props.name : 'Medication';
  const strength = props.strength.value ? props.strength.value : '## mG';
  const form = props.form ? props.form : 'Form';
  const manufacturer = props.manufacturer ? props.manufacturer : '';

  const quantity = props.quantity
    ? getFormattedNumberString(props.quantity, numberFormat)
    : '##';

  const sig = props.sig ? props.sig : 'Sig.';
  const diluent = props.diluent ? props.diluent : 'Diluent';
  const volume = props.volume ? props.volume : '## mL';
  const rate = props.rate ? props.rate : '## mL / hr';

  const preparation = props.preparation
    ? getFormattedDateString(props.preparation, dateFormat)
    : 'MM/DD/YYYY hh:mm';

  const expiration = props.expiration
    ? getFormattedDateString(props.expiration, dateFormat)
    : 'MM/DD/YYYY hh:mm';

  switch (props.labelType) {
    case 'standard':
      return (
        <section className="mb-1">
          <div className="d-flex justify-content-between m-0">
            <p className="font-weight-bold">
              {props.strength.isRequired
                ? `${name}, ${strength} ${form}`
                : `${name} ${form}`}
            </p>
            <p>Mfr: {manufacturer}</p>
          </div>
          <div>
            <p>Qty: {quantity}</p>
            <p className="font-italic">{sig}</p>
          </div>
        </section>
      );

    case 'infusion':
      return (
        <section className="mb-1">
          <div className="d-flex justify-content-between m-0">
            <p className="font-weight-bold">
              {props.strength.isRequired ? `${name}, ${strength}` : `${name}`}
            </p>
            <p>Mfr: {manufacturer}</p>
          </div>
          <div>
            <p className="font-weight-bold">
              in {diluent}, {volume}
            </p>
            <p className="font-weight-bold">Rate: {rate}</p>
            <div className="d-flex justify-content-between m-0">
              <p>Prep: {preparation}</p>
              <p className="font-weight-bold">Exp: {expiration}</p>
            </div>
          </div>
        </section>
      );

    case 'syringe':
      return (
        <section className="mb-1">
          <div className="d-flex justify-content-between m-0">
            <p className="font-weight-bold">
              {props.strength.isRequired
                ? `${name}, ${strength} / ${volume} Syringe`
                : `${name}, ${volume} Syringe`}
            </p>
            <p>Mfr: {manufacturer}</p>
          </div>
          <div>
            <p className="font-italic">{sig}</p>
          </div>
          <div>
            <div className="d-flex justify-content-between m-0">
              <p>Prep: {preparation}</p>
              <p className="font-weight-bold">Exp: {expiration}</p>
            </div>
          </div>
        </section>
      );

    default:
      return null;
  }
};

MedicationSection.propTypes = {
  labelType: PropTypes.oneOf(['standard', 'infusion', 'syringe', ''])
    .isRequired,

  name: PropTypes.string,

  strength: PropTypes.shape({
    value: PropTypes.string,
    isRequired: PropTypes.bool,
  }).isRequired,

  form: PropTypes.string,
  manufacturer: PropTypes.string,
  quantity: PropTypes.string,
  sig: PropTypes.string,
  diluent: PropTypes.string,
  volume: PropTypes.string,
  rate: PropTypes.string,
  preparation: PropTypes.string,
  expiration: PropTypes.string,
};

MedicationSection.defaultProps = {
  name: '',
  form: '',
  manufacturer: '',
  quantity: '',
  sig: '',
  diluent: '',
  volume: '',
  rate: '',
  preparation: '',
  expiration: '',
};

const PrescriberPharmacistSection = props => {
  const prescriber = props.prescriber ? props.prescriber : '';
  const pharmacist = props.pharmacist ? props.pharmacist : '';

  return (
    <section>
      <div className="d-flex justify-content-between">
        <p>Prescriber: {prescriber}</p>
        <p>RPh: {pharmacist}</p>
      </div>
    </section>
  );
};

PrescriberPharmacistSection.propTypes = {
  prescriber: PropTypes.string.isRequired,
  pharmacist: PropTypes.string.isRequired,
};

const DispenseSection = props => {
  const dispensed = props.dispensed ? props.dispensed : 'MM/DD/YYYY hh:mm';

  return (
    <section className="mt-1">
      <div className="d-flex justify-content-between">
        <p>Dispensed by: ____</p>
        <p>Received by: ____</p>
      </div>
      <p>Dispensed: {dispensed}</p>
    </section>
  );
};

DispenseSection.propTypes = {
  dispensed: PropTypes.string.isRequired,
};

export default Preview;