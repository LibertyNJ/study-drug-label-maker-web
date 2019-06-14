import React from 'react';

import FormSection from '../components/MainView/FormSection';
import PreviewSection from '../components/MainView/PreviewSection';

import { convertNumberToPaddedString, formatDateAsString } from '../utils';

export default class MainView extends React.Component {
  state = {};

  handleFormControlChange = (event) => {
    const { target } = event;
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const now = new Date();

    if (this.isRxNumberNotOverridden()) {
      const studyRxNumber = MainView.generateRxNumberFromDate(now);
      this.setState({ studyRxNumber });
    }

    const dispensed = formatDateAsString(now);
    this.setState({ dispensed }, () => window.print());
  };

  isRxNumberNotOverridden = () => !this.state.studyRxNumberIsOverridden;

  static generateRxNumberFromDate = (date) => {
    const year = date.getFullYear();
    const month = convertNumberToPaddedString(date.getMonth() + 1);
    const day = convertNumberToPaddedString(date.getDate());
    const hours = convertNumberToPaddedString(date.getHours());
    const minutes = convertNumberToPaddedString(date.getMinutes());
    const seconds = convertNumberToPaddedString(date.getSeconds());
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
  };

  render = () => {
    const patient = {
      address: {
        apartment: this.state.patientAddress2,
        city: this.state.patientCity,
        state: this.state.patientState,
        street: this.state.patientAddress1,
        zip: this.state.patientZip,
      },
      dateOfBirth: this.state.patientDateOfBirth,
      name: {
        first: this.state.patientNameFirst,
        last: this.state.patientNameLast,
        middleInitial: this.state.patientNameMiddleInitial,
      },
    };

    const study = {
      patientNumber: this.state.studyPatientNumber,
      protocol: this.state.studyProtocol,
      rxNumber: {
        isOverridden: this.state.studyRxNumberIsOverridden,
        value: this.state.studyRxNumber,
      },
    };

    const medication = {
      diluent: this.state.medicationDiluent,
      expiration: this.state.medicationExpiration,
      form: this.state.medicationForm,
      rate: this.state.medicationRate,
      manufacturer: this.state.medicationManufacturer,
      name: this.state.medicationName,
      preparation: this.state.medicationPreparation,
      quantity: this.state.medicationQuantity,
      sig: this.state.medicationSig,
      strength: {
        isDisabled: this.state.medicationStrengthIsDisabled,
        value: this.state.medicationStrength,
      },
      volume: this.state.medicationVolume,
    };

    return (
      <div className="row flex-nowrap">
        <FormSection
          labelType={this.state.labelType}
          patient={patient}
          study={study}
          medication={medication}
          prescriber={this.state.prescriber}
          pharmacist={this.state.pharmacist}
          researchPrintPaddingIsDisabled={this.state.researchPrintPaddingIsDisabled}
          handleFormControlChange={this.handleFormControlChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <PreviewSection
          labelType={this.state.labelType}
          patient={patient}
          study={study}
          medication={medication}
          prescriber={this.state.prescriber}
          pharmacist={this.state.pharmacist}
          dispensed={this.state.dispensed}
          researchPrintPaddingIsDisabled={this.state.researchPrintPaddingIsDisabled}
        />
      </div>
    );
  };
}
