import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer/Footer';
import MainForm from '../components/Main/Form';
import MainPreview from '../components/Main/Preview';

const propTypes = {
  version: PropTypes.string.isRequired,
};

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labelType: '',

      patientNameLast: '',
      patientNameFirst: '',
      patientNameMi: '',
      patientDob: '',
      patientAddress1: '',
      patientAddress2: '',
      patientCity: '',
      patientState: '',
      patientZip: '',

      studyProtocol: '',
      studyRxNumber: '',
      studyRxNumberIsOverridden: false,
      studyPatientNumber: '',

      medicationName: '',
      medicationStrength: '',
      medicationStrengthIsRequired: true,
      medicationForm: '',
      medicationDiluent: '',
      medicationVolume: '',
      medicationRate: '',
      medicationManufacturer: '',
      medicationQuantity: '',
      medicationSig: '',
      medicationPreparation: '',
      medicationExpiration: '',

      prescriber: '',
      pharmacist: '',

      dispensed: '',

      researchPrintPaddingIsEnabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

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

    const dateFormat = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    const now = new Date();

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
      <div className="vh-100 d-flex d-print-block flex-column">
        <Header heading="Study Drug Label Maker" helpButtonIsEnabled />
        <main className="container-fluid row mh-0">
          <MainForm
            labelType={this.state.labelType}
            patient={patient}
            study={study}
            medication={medication}
            prescriber={this.state.prescriber}
            pharmacist={this.state.pharmacist}
            researchPrintPaddingIsEnabled={
              this.state.researchPrintPaddingIsEnabled
            }
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <MainPreview
            labelType={this.state.labelType}
            patient={patient}
            study={study}
            medication={medication}
            prescriber={this.state.prescriber}
            pharmacist={this.state.pharmacist}
            dispensed={this.state.dispensed}
            researchPrintPaddingIsEnabled={
              this.state.researchPrintPaddingIsEnabled
            }
          />
        </main>
        <Footer version={this.props.version} />
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
