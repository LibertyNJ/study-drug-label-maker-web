import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from './LabelRow';
import LabelSection from './LabelSection';

import { formatDateOfBirthString } from '../../../../utils';

const PatientSection = (props) => {
  const lastName = props.name.last || 'Last';
  const firstName = props.name.first || 'First';
  const middleInitial = props.name.middleInitial ? ` ${props.name.middleInitial}` : '';
  const dateOfBirth = props.dateOfBirth ? formatDateOfBirthString(props.dateOfBirth) : 'MM/DD/YYYY';
  const street = props.address.street || 'Street';
  const apartment = props.address.apartment ? `, ${props.address.apartment}` : '';
  const city = props.address.city || 'City';
  const state = props.address.state || 'ST';
  const zip = props.address.zip || '#####';

  return (
    <LabelSection>
      <LabelRow>
        <p className="font-weight-bold">
          {lastName}, {firstName}
          {middleInitial}
        </p>
        <p>DoB: {dateOfBirth}</p>
      </LabelRow>
      <LabelRow>
        <p>
          {street}
          {apartment}
          <br />
          {city}, {state} {zip}
        </p>
      </LabelRow>
    </LabelSection>
  );
};

PatientSection.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string,
    apartment: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  }).isRequired,
  dateOfBirth: PropTypes.string,
  name: PropTypes.shape({
    last: PropTypes.string,
    first: PropTypes.string,
    mi: PropTypes.string,
  }).isRequired,
};

PatientSection.defaultProps = {
  dateOfBirth: undefined,
};

export default PatientSection;
