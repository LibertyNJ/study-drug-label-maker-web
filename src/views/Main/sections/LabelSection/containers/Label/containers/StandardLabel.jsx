'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LabelHeader from '../components/LabelHeader';
import DispenseSection from './DispenseSection';
import MedicationSection from './MedicationSection';
import PatientSection from './PatientSection';
import ProvidersSection from './ProvidersSection';
import StudySection from './StudySection';
import { reduceClassNames } from '../../../../../../../util';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StandardLabel);

function mapStateToProps({ alternatePrintFormatIsEnabled }) {
  return {
    alternatePrintFormatIsEnabled,
  };
}

function mapDispatchToProps() {
  return {};
}

StandardLabel.propTypes = {
  alternatePrintFormatIsEnabled: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

const BASE_CLASS_NAME = 'label label--standard';

function StandardLabel({ alternatePrintFormatIsEnabled, className, ...restProps }) {
  const formatClassName = !alternatePrintFormatIsEnabled ? 'label--alternate-format' : '';
  return (
    <article
      className={reduceClassNames(BASE_CLASS_NAME, formatClassName, className)}
      {...restProps}
    >
      <div className="label__body d-flex flex-column">
        <LabelHeader />
        <PatientSection className="mb-1" />
        <StudySection className="mb-1" />
        <MedicationSection className="mb-1" />
        <ProvidersSection />
        <footer className="mt-auto">
          <DispenseSection className="mt-1" />
        </footer>
      </div>
    </article>
  );
}
