'use-strict';

import React from 'react';
import { connect } from 'react-redux';

import LabelTypeFieldset from './components/LabelTypeFieldSet';
import MedicationSection from './sections/MedicationSection';
import PatientSection from './sections/PatientSection';
import ProvidersSection from './sections/ProvidersSection';
import PrintSection from './sections/PrintSection';
import StudySection from './sections/StudySection';
import { printLabel } from '../../../../../../redux/actions';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: event => handleSubmit(event, dispatch),
  };
}

function Form({ ...restProps }) {
  return (
    <form {...restProps}>
      <LabelTypeFieldset />
      <PatientSection className="mb-3" />
      <StudySection className="mb-3" />
      <MedicationSection className="mb-3" />
      <ProvidersSection className="mb-3" />
      <PrintSection />
    </form>
  );
}

function handleSubmit(event, dispatch) {
  event.preventDefault();
  dispatch(printLabel(new Date()));
}
