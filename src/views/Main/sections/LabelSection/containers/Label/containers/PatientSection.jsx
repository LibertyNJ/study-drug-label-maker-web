'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LabelRow from '../components/LabelRow';
import { formatDateOfBirthString } from '../../../../../../../util';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PatientSection);

function mapStateToProps(state) {
  return {
    addressLine1: state.patientAddressLine1,
    addressLine2: state.patientAddressLine2,
    city: state.patientCity,
    dateOfBirth: state.patientDateOfBirth,
    firstName: state.patientFirstName,
    lastName: state.patientLastName,
    middleInitial: state.patientMiddleInitial,
    state: state.patientState,
    zip: state.patientZip,
  };
}

function mapDispatchToProps() {
  return {};
}

PatientSection.propTypes = {
  addressLine1: PropTypes.string.isRequired,
  addressLine2: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  middleInitial: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
};

function PatientSection({
  addressLine1,
  addressLine2,
  city,
  dateOfBirth,
  firstName,
  lastName,
  middleInitial,
  state,
  zip,
  ...restProps
}) {
  return (
    <section {...restProps}>
      <LabelRow>
        <p className="font-weight-bold">
          {lastName || 'Last'}, {firstName || 'First'} {middleInitial}
        </p>
        <p>DoB: {dateOfBirth ? formatDateOfBirthString(dateOfBirth) : 'MM/DD/YYYY'}</p>
      </LabelRow>
      <LabelRow>
        <p>
          {addressLine1 || 'Street'}
          {addressLine2 ? `, ${addressLine2}` : null} <br />
          {city || 'City'}, {state || 'ST'} {zip || '#####'}
        </p>
      </LabelRow>
    </section>
  );
}
