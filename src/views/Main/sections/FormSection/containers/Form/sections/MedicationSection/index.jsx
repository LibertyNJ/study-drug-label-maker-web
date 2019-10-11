'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import MedicationStrengthToggle from './containers/MedicationStrengthToggle';
import FormSubsection from '../../components/FormSubsection';
import ConnectedInput from '../../../../../../../../containers/ConnectedInput';
import Column from '../../../../../../../../components/Column';
import FormRow from '../../../../../../../../components/FormRow';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MedicationSection);

function mapStateToProps(state) {
  return {
    labelType: state.labelType,
  };
}

function mapDispatchToProps() {
  return {};
}

const ManufacturerConnectedInput = (
  <ConnectedInput
    label="Manufacturer"
    name="medicationManufacturer"
    placeholder="Liberty Pharma…"
    required
    type="text"
  />
);

const MedicationDateColumns = (
  <React.Fragment>
    <Column>
      <ConnectedInput
        info="Time must include AM or PM"
        label="Preparation date and time"
        max="9999-12-31T23:59"
        name="medicationPreparationDate"
        required
        type="datetime-local"
      />
    </Column>
    <Column>
      <ConnectedInput
        info="Time must include AM or PM"
        label="Expiration date and time"
        max="9999-12-31T23:59"
        name="medicationExpirationDate"
        required
        type="datetime-local"
      />
    </Column>
  </React.Fragment>
);

const SigConnectedInput = (
  <ConnectedInput
    label="Sig"
    name="medicationSig"
    placeholder="One tablet by mouth every day…"
    required
    type="textarea"
  />
);

const VolumeConnectedInput = (
  <ConnectedInput
    label="Volume"
    name="medicationVolume"
    placeholder="100 mL…"
    required
    type="text"
  />
);

MedicationSection.propTypes = {
  labelType: PropTypes.oneOf(['infusion', 'standard', 'syringe', '']),
};

function MedicationSection({ labelType, ...restProps }) {
  return (
    <FormSubsection heading="Medication" {...restProps}>
      <FormRow>
        <Column>
          <ConnectedInput
            type="text"
            name="medicationName"
            label="Name"
            required
            placeholder="Drugitol…"
          />
        </Column>
        <Column>
          <ConnectedInput
            append={<MedicationStrengthToggle />}
            label="Strength"
            name="medicationStrength"
            placeholder="100 mG…"
            required
            type="text"
          />
        </Column>
        <Column>
          {isInfusion(labelType) && ManufacturerConnectedInput}
          {isStandard(labelType) && (
            <ConnectedInput
              type="text"
              name="medicationForm"
              label="Form"
              required
              placeholder="Tablet…"
            />
          )}
          {isSyringe(labelType) && VolumeConnectedInput}
        </Column>
      </FormRow>
      <FormRow>
        {isInfusion(labelType) && (
          <React.Fragment>
            <Column>
              <ConnectedInput
                label="Diluent"
                name="medicationDiluent"
                placeholder="0.9% Sodium Chloride…"
                required
                type="text"
              />
            </Column>
            <Column>{VolumeConnectedInput}</Column>
            <Column>
              <ConnectedInput
                label="Rate"
                name="medicationRate"
                placeholder="50 mL / hr…"
                required
                type="text"
              />
            </Column>
          </React.Fragment>
        )}
        {isStandard(labelType) && (
          <React.Fragment>
            <Column span={6}>
              <ConnectedInput
                label="Quantity"
                min={1}
                name="medicationQuantity"
                placeholder="100…"
                required
                type="number"
              />
            </Column>
            <Column>{ManufacturerConnectedInput}</Column>
          </React.Fragment>
        )}
        {isSyringe(labelType) && (
          <React.Fragment>
            <Column span={8}>{SigConnectedInput}</Column>
            <Column span={4}>{ManufacturerConnectedInput}</Column>
          </React.Fragment>
        )}
      </FormRow>
      <FormRow>
        {(isInfusion(labelType) || isSyringe(labelType)) && MedicationDateColumns}
        {isStandard(labelType) && <Column>{SigConnectedInput}</Column>}
      </FormRow>
    </FormSubsection>
  );
}

function isInfusion(labelType) {
  return labelType === 'infusion';
}

function isStandard(labelType) {
  return labelType === 'standard';
}

function isSyringe(labelType) {
  return labelType === 'syringe';
}
