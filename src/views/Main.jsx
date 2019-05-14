import React from 'react';

import FormSection from '../components/FormSection';
import PreviewSection from '../components/PreviewSection';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studyRxNumberIsOverridden: false,
      medicationStrengthIsRequired: true,
      researchPrintFormatIsEnabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    if (target.type === 'checkbox') {
      this.setState(state => {
        return { [name]: !state[name] };
      });
    } else {
      const titleCaseList = [
        'patientNameLast',
        'patientNameFirst',
        'patientNameMi',
        'patientAddress1',
        'patientAddress2',
        'patientCity',
        'medicationManufacturer',
        'prescriber',
        'pharmacist',
      ];

      const capitalizeList = ['patientState'];
      const value = target.value;

      if (titleCaseList.includes(name)) {
        this.setState({
          [name]: value.replace(/\b[a-z]/g, match => match.toUpperCase()),
        });
      } else if (capitalizeList.includes(name)) {
        this.setState({ [name]: value.toUpperCase() });
      } else {
        this.setState({ [name]: value });
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const now = new Date();
    
    const dateFormat = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    if (!this.state.studyRxNumberIsOverridden) {
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');

      const day = now
        .getDate()
        .toString()
        .padStart(2, '0');

      const hours = now
        .getHours()
        .toString()
        .padStart(2, '0');

      const minutes = now
        .getMinutes()
        .toString()
        .padStart(2, '0');

      const seconds = now
        .getSeconds()
        .toString()
        .padStart(2, '0');

      this.setState(
        {
          studyRxNumber: `${year}${month}${day}${hours}${minutes}${seconds}`,
          dispensed: now.toLocaleString('en-US', dateFormat),
        },
        () => window.print()
      );
    } else {
      this.setState(
        { dispensed: now.toLocaleString('en-US', dateFormat) },
        () => window.print()
      );
    }
  }

  render() {
    const patient = {
      name: {
        last: this.state.patientNameLast,
        first: this.state.patientNameFirst,
        mi: this.state.patientNameMi,
      },

      dob: this.state.patientDob,

      address: {
        street: this.state.patientAddress1,
        apartment: this.state.patientAddress2,
        city: this.state.patientCity,
        state: this.state.patientState,
        zip: this.state.patientZip,
      },
    };

    const study = {
      protocol: this.state.studyProtocol,

      rxNumber: {
        value: this.state.studyRxNumber,
        isOverridden: this.state.studyRxNumberIsOverridden,
      },

      patientNumber: this.state.studyPatientNumber,
    };

    const medication = {
      name: this.state.medicationName,

      strength: {
        value: this.state.medicationStrength,
        isRequired: this.state.medicationStrengthIsRequired,
      },

      form: this.state.medicationForm,
      diluent: this.state.medicationDiluent,
      volume: this.state.medicationVolume,
      rate: this.state.medicationRate,
      manufacturer: this.state.medicationManufacturer,
      quantity: this.state.medicationQuantity,
      sig: this.state.medicationSig,
      preparation: this.state.medicationPreparation,
      expiration: this.state.medicationExpiration,
    };

    return (
      <React.Fragment>
        <div className="row flex-nowrap">
          <FormSection
            labelType={this.state.labelType}
            patient={patient}
            study={study}
            medication={medication}
            prescriber={this.state.prescriber}
            pharmacist={this.state.pharmacist}
            researchPrintFormatIsEnabled={
              this.state.researchPrintFormatIsEnabled
            }
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <PreviewSection
            labelType={this.state.labelType}
            patient={patient}
            study={study}
            medication={medication}
            prescriber={this.state.prescriber}
            pharmacist={this.state.pharmacist}
            dispensed={this.state.dispensed}
            researchPrintFormatIsEnabled={
              this.state.researchPrintFormatIsEnabled
            }
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
