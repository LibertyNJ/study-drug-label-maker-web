import React from 'react';
import PropTypes from 'prop-types';

class MainForm extends React.Component {
  render() {
    return (
      <section className="d-print-none overflow-auto col">
        <h2 className="text-primary">Form</h2>
        <form onSubmit={this.props.handleSubmit}>
          <fieldset className="form-group">
            <legend>Label type</legend>
            <div className="form-check-inline">
              <Toggle
                type="radio"
                name="labelType"
                value="standard"
                checked={this.props.labelType === 'standard'}
                label="Standard"
                handleChange={this.props.handleChange}
              />
            </div>
            <div className="form-check-inline">
              <Toggle
                type="radio"
                name="labelType"
                value="infusion"
                checked={this.props.labelType === 'infusion'}
                label="Infusion"
                handleChange={this.props.handleChange}
              />
            </div>
            <div className="form-check-inline">
              <Toggle
                type="radio"
                name="labelType"
                value="syringe"
                checked={this.props.labelType === 'syringe'}
                label="Syringe"
                handleChange={this.props.handleChange}
              />
            </div>
          </fieldset>
          <Section header="Patient">
            <fieldset className="form-group">
              <legend>Name</legend>
              <div className="form-row">
                <div className="form-group col">
                  <Input
                    type="text"
                    name="patientNameLast"
                    value={this.props.patient.name.last}
                    label="Last"
                    required
                    attributes={{
                      placeholder: 'Doe…',
                    }}
                    handleChange={this.props.handleChange}
                  />
                </div>
                <div className="form-group col">
                  <Input
                    type="text"
                    name="patientNameFirst"
                    value={this.props.patient.name.first}
                    label="First"
                    required
                    attributes={{
                      placeholder: 'John…',
                    }}
                    handleChange={this.props.handleChange}
                  />
                </div>
                <div className="form-group col-2">
                  <Input
                    type="text"
                    name="patientNameMi"
                    value={this.props.patient.name.mi}
                    label="M.I."
                    info="Optional"
                    attributes={{
                      placeholder: 'G…',
                      maxLength: 1,
                    }}
                    handleChange={this.props.handleChange}
                  />
                </div>
              </div>
            </fieldset>
            <div className="form-row">
              <div className="form-group col-5">
                <Input
                  type="date"
                  name="patientDob"
                  value={this.props.patient.dob}
                  label="Date of birth"
                  required
                  attributes={{
                    max: '9999-12-31',
                  }}
                  handleChange={this.props.handleChange}
                />
              </div>
            </div>
            <fieldset>
              <legend>Address</legend>
              <div className="form-row">
                <div className="form-group col">
                  <Input
                    type="text"
                    name="patientAddress1"
                    value={this.props.patient.address.street}
                    label="Street"
                    required
                    attributes={{
                      placeholder: '123 Any Street…',
                    }}
                    handleChange={this.props.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <Input
                    type="text"
                    name="patientAddress2"
                    value={this.props.patient.address.apartment}
                    label="Apartment"
                    info="Optional"
                    attributes={{
                      placeholder: 'Apt. ABC…',
                    }}
                    handleChange={this.props.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-6">
                  <Input
                    type="text"
                    name="patientCity"
                    value={this.props.patient.address.city}
                    label="City"
                    required
                    attributes={{
                      placeholder: 'Anytown…',
                    }}
                    handleChange={this.props.handleChange}
                  />
                </div>
                <div className="form-group col-2">
                  <Input
                    type="text"
                    name="patientState"
                    value={this.props.patient.address.state}
                    label="State"
                    required
                    attributes={{
                      placeholder: 'NY…',
                      maxLength: 2,
                    }}
                    handleChange={this.props.handleChange}
                  />
                </div>
                <div className="form-group col-4">
                  <Input
                    type="text"
                    name="patientZip"
                    value={this.props.patient.address.zip}
                    label="ZIP"
                    required
                    attributes={{
                      placeholder: '12345…',
                      maxLength: 5,
                    }}
                    handleChange={this.props.handleChange}
                  />
                </div>
              </div>
            </fieldset>
          </Section>
          <Section header="Study">
            <div className="form-row">
              <div className="form-group col-6">
                <Input
                  type="text"
                  name="studyProtocol"
                  value={this.props.study.protocol}
                  label="Protocol"
                  required
                  attributes={{
                    placeholder: 'D3561C00009…',
                  }}
                  handleChange={this.props.handleChange}
                />
              </div>
              <div className="form-group col-6">
                <Input
                  type="text"
                  name="studyRxNumber"
                  value={this.props.study.rxNumber.value}
                  label="Rx number"
                  required={this.props.study.rxNumber.isOverridden}
                  disabled={!this.props.study.rxNumber.isOverridden}
                  attributes={{
                    placeholder: '20181203112556…',
                  }}
                  handleChange={this.props.handleChange}
                />
                <Toggle
                  type="switch"
                  name="studyRxNumberIsOverridden"
                  checked={this.props.study.rxNumber.isOverridden}
                  label="Override"
                  handleChange={this.props.handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-6">
                <Input
                  type="text"
                  name="studyPatientNumber"
                  value={this.props.study.patientNumber}
                  label="Patient number"
                  required
                  attributes={{
                    placeholder: '002806…',
                  }}
                  handleChange={this.props.handleChange}
                />
              </div>
            </div>
          </Section>
          <MedicationSection
            labelType={this.props.labelType}
            medication={this.props.medication}
            handleChange={this.props.handleChange}
          />
          <Section header="Prescriber and pharmacist">
            <div className="form-row">
              <div className="form-group col">
                <Input
                  type="text"
                  name="prescriber"
                  value={this.props.prescriber}
                  label="Prescriber"
                  required
                  attributes={{
                    placeholder: 'Somebody, MD…',
                  }}
                  handleChange={this.props.handleChange}
                />
              </div>
              <div className="form-group col">
                <Input
                  type="text"
                  name="pharmacist"
                  value={this.props.pharmacist}
                  label="Pharmacist"
                  required
                  attributes={{
                    placeholder: 'Soandso, RPh…',
                  }}
                  handleChange={this.props.handleChange}
                />
              </div>
            </div>
          </Section>
          <button
            className="btn btn-primary btn-lg d-block ml-auto"
            type="submit"
          >
            Print
          </button>
        </form>
      </section>
    );
  }
}

MainForm.propTypes = {
  labelType: PropTypes.string.isRequired,

  patient: PropTypes.shape({
    name: PropTypes.object,
    address: PropTypes.object,
    dob: PropTypes.string,
  }).isRequired,

  study: PropTypes.shape({
    protocol: PropTypes.string,
    rxNumber: PropTypes.object,
    patientNumber: PropTypes.string,
  }).isRequired,

  medication: PropTypes.shape({
    name: PropTypes.string,
    strength: PropTypes.object,
    form: PropTypes.string,
    quantity: PropTypes.string,
    manufacturer: PropTypes.string,
    sig: PropTypes.string,
    diluent: PropTypes.string,
    volume: PropTypes.string,
    rate: PropTypes.string,
    preparation: PropTypes.string,
    expiration: PropTypes.string,
  }).isRequired,

  prescriber: PropTypes.string.isRequired,
  pharmacist: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

function Section(props) {
  return (
    <section className="p-3 border mb-3">
      <h3 className="text-primary">{props.header}</h3>
      {props.children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
};

Section.defaultProps = {
  children: null,
};

function MedicationSection(props) {
  switch (props.labelType) {
    case 'standard':
      return (
        <section className="p-3 border mb-3">
          <h3 className="text-primary">Medication</h3>
          <p className="text-info">Standard</p>
          <div className="form-row">
            <div className="form-group col-3">
              <Input
                type="text"
                name="medicationName"
                value={props.medication.name}
                label="Name"
                required
                attributes={{
                  placeholder: 'Drugitol…',
                }}
                handleChange={props.handleChange}
              />
            </div>
            <div className="form-group col-3">
              <Input
                type="text"
                name="medicationStrength"
                value={props.medication.strength.value}
                label="Strength"
                required={props.medication.strength.isRequired}
                disabled={!props.medication.strength.isRequired}
                attributes={{
                  placeholder: '100 mG…',
                }}
                handleChange={props.handleChange}
              />
              <Toggle
                type="switch"
                name="medicationStrengthIsRequired"
                checked={!props.medication.strength.isRequired}
                label="No strength"
                handleChange={props.handleChange}
              />
            </div>
            <div className="form-group col-3">
              <Input
                type="text"
                name="medicationForm"
                value={props.medication.form}
                label="Form"
                required
                attributes={{
                  placeholder: 'Tablet…',
                }}
                handleChange={props.handleChange}
              />
            </div>
            <div className="form-group col-3">
              <Input
                type="text"
                name="medicationManufacturer"
                value={props.medication.manufacturer}
                label="Manufacturer"
                required
                attributes={{
                  placeholder: 'Liberty Pharma…',
                }}
                handleChange={props.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-3">
              <Input
                type="number"
                name="medicationQuantity"
                value={props.medication.quantity}
                label="Quantity"
                required
                attributes={{
                  placeholder: '100…',
                  min: 1,
                }}
                handleChange={props.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <Input
              type="textarea"
              name="medicationSig"
              value={props.medication.sig}
              label="Sig"
              required
              attributes={{
                placeholder: 'One tablet by mouth every day…',
              }}
              handleChange={props.handleChange}
            />
          </div>
        </section>
      );

    case 'infusion':
      return (
        <section className="p-3 border mb-3">
          <h3 className="text-primary">Medication</h3>
          <p className="text-info">Infusion</p>
          <div className="form-row">
            <div className="form-group col-4">
              <Input
                type="text"
                name="medicationName"
                value={props.medication.name}
                label="Name"
                required
                attributes={{
                  placeholder: 'Drugitol…',
                }}
                handleChange={props.handleChange}
              />
            </div>
            <div className="form-group col-4">
              <Input
                type="text"
                name="medicationStrength"
                value={props.medication.strength.value}
                label="Strength"
                required={props.medication.strength.isRequired}
                disabled={!props.medication.strength.isRequired}
                attributes={{
                  placeholder: '100 mG…',
                }}
                handleChange={props.handleChange}
              />
              <Toggle
                type="switch"
                name="medicationStrengthIsRequired"
                checked={!props.medication.strength.isRequired}
                label="No strength"
                handleChange={props.handleChange}
              />
            </div>
            <div className="form-group col-4">
              <Input
                type="text"
                name="medicationManufacturer"
                value={props.medication.manufacturer}
                label="Manufacturer"
                required
                attributes={{
                  placeholder: 'Liberty Pharma…',
                }}
                handleChange={props.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-6">
              <Input
                type="text"
                name="medicationDiluent"
                value={props.medication.diluent}
                label="Diluent"
                required
                attributes={{
                  placeholder: '0.9% Sodium Chloride…',
                }}
                handleChange={props.handleChange}
              />
            </div>
            <div className="form-group col-3">
              <Input
                type="text"
                name="medicationVolume"
                value={props.medication.volume}
                label="Volume"
                required
                attributes={{
                  placeholder: '100 mL…',
                }}
                handleChange={props.handleChange}
              />
            </div>
            <div className="form-group col-3">
              <Input
                type="text"
                name="medicationRate"
                value={props.medication.rate}
                label="Rate"
                required
                attributes={{
                  placeholder: '50 mL / hr…',
                }}
                handleChange={props.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-6">
              <Input
                type="datetime-local"
                name="medicationPreparation"
                value={props.medication.preparation}
                label="Preparation date and time"
                required
                info="Time must include AM or PM"
                attributes={{
                  max: '9999-12-31T23:59',
                }}
                handleChange={props.handleChange}
              />
            </div>
            <div className="form-group col-6">
              <Input
                type="datetime-local"
                name="medicationExpiration"
                value={props.medication.expiration}
                label="Expiration date and time"
                required
                info="Time must include AM or PM"
                attributes={{
                  max: '9999-12-31T23:59',
                }}
                handleChange={props.handleChange}
              />
            </div>
          </div>
        </section>
      );

    case 'syringe':
      return (
        <section className="p-3 border mb-3">
          <h3 className="text-primary">Medication</h3>
          <p className="text-info">Syringe</p>
          <div className="form-row">
            <div className="form-group col-3">
              <Input
                type="text"
                name="medicationName"
                value={props.medication.name}
                label="Name"
                required
                attributes={{
                  placeholder: 'Drugitol…',
                }}
                handleChange={props.handleChange}
              />
            </div>
            <div className="form-group col-3">
              <Input
                type="text"
                name="medicationStrength"
                value={props.medication.strength.value}
                label="Strength"
                required={props.medication.strength.isRequired}
                disabled={!props.medication.strength.isRequired}
                attributes={{
                  placeholder: '100 mG…',
                }}
                handleChange={props.handleChange}
              />
              <Toggle
                type="switch"
                name="medicationStrengthIsRequired"
                checked={!props.medication.strength.isRequired}
                label="No strength"
                handleChange={props.handleChange}
              />
            </div>
            <div className="form-group col-3">
              <Input
                type="text"
                name="medicationVolume"
                value={props.medication.volume}
                label="Volume"
                required
                attributes={{
                  placeholder: '100 mL…',
                }}
                handleChange={props.handleChange}
              />
            </div>

            <div className="form-group col-3">
              <Input
                type="text"
                name="medicationManufacturer"
                value={props.medication.manufacturer}
                label="Manufacturer"
                required
                attributes={{
                  placeholder: 'Liberty Pharma…',
                }}
                handleChange={props.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <Input
              type="textarea"
              name="medicationSig"
              value={props.medication.sig}
              label="Sig"
              required
              attributes={{
                placeholder: 'IV push over 5 minutes…',
              }}
              handleChange={props.handleChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-6">
              <Input
                type="datetime-local"
                name="medicationPreparation"
                value={props.medication.preparation}
                label="Preparation date and time"
                required
                info="Time must include AM or PM"
                attributes={{
                  max: '9999-12-31T23:59',
                }}
                handleChange={props.handleChange}
              />
            </div>
            <div className="form-group col-6">
              <Input
                type="datetime-local"
                name="medicationExpiration"
                value={props.medication.expiration}
                label="Expiration date and time"
                required
                info="Time must include AM or PM"
                attributes={{
                  max: '9999-12-31T23:59',
                }}
                handleChange={props.handleChange}
              />
            </div>
          </div>
        </section>
      );

    default:
      return null;
  }
}

MedicationSection.propTypes = {
  labelType: PropTypes.oneOf(['standard', 'infusion', 'syringe', ''])
    .isRequired,
  medication: PropTypes.shape({
    name: PropTypes.string,
    strength: PropTypes.object,
    form: PropTypes.string,
    sig: PropTypes.string,
    manufacturer: PropTypes.string,
    quantity: PropTypes.string,
    diluent: PropTypes.string,
    rate: PropTypes.string,
    volume: PropTypes.string,
    preparation: PropTypes.string,
    expiration: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

function Toggle(props) {
  return (
    <div className={`custom-control custom-${props.type}`}>
      <input
        id={props.type === 'radio' ? props.value : props.name}
        className="custom-control-input"
        type={props.type === 'radio' ? 'radio' : 'checkbox'}
        name={props.name}
        value={props.type === 'radio' ? props.value : undefined}
        checked={props.checked}
        onChange={props.handleChange}
      />
      <label
        className="custom-control-label"
        htmlFor={props.type === 'radio' ? props.value : props.name}
      >
        {props.label}
      </label>
    </div>
  );
}

Toggle.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  value: undefined,
};

function Input(props) {
  const InputElement = props.type === 'textarea' ? 'textarea' : 'input';

  if (props.append) {
    const AppendElement = props.append.type;

    return (
      <div>
        <label htmlFor={props.name}>{props.label}</label>
        <div className="input-group">
          <InputElement
            id={props.name}
            className="form-control"
            type={props.type === 'textarea' ? undefined : props.type}
            name={props.name}
            value={props.value}
            required={props.required}
            disabled={props.disabled}
            onChange={props.handleChange}
            {...props.attributes}
          />
          <div className="input-group-append">
            <AppendElement {...props.append.props}>
              {props.append.children}
            </AppendElement>
          </div>
        </div>
        {props.info ? (
          <small className="form-text text-info">{props.info}</small>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <InputElement
        id={props.name}
        className="form-control"
        type={props.type === 'textarea' ? undefined : props.type}
        name={props.name}
        value={props.value}
        required={props.required}
        disabled={props.disabled}
        onChange={props.handleChange}
        {...props.attributes}
      />
      {props.info ? (
        <small className="form-text text-info">{props.info}</small>
      ) : null}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  info: PropTypes.string,
  disabled: PropTypes.bool,
  append: PropTypes.shape({
    type: PropTypes.string,
    props: PropTypes.objectOf(PropTypes.any),
    children: PropTypes.node,
  }),
  attributes: PropTypes.objectOf(PropTypes.any),
  handleChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  info: undefined,
  disabled: undefined,
  append: undefined,
  attributes: undefined,
  required: undefined,
};

export default MainForm;