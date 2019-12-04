import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import DispenseSection from './DispenseSection';
import LabelHeader from './LabelHeader';
import MedicationSection from './MedicationSection';
import PatientSection from './PatientSection';
import ProvidersSection from './ProvidersSection';
import StudySection from './StudySection';
import { reduceClassNames } from '../../../../../../../util';

export default connect(mapStateToProps, mapDispatchToProps)(InfusionLabel);

function mapStateToProps({ alternatePrintFormatIsEnabled }) {
  return {
    alternatePrintFormatIsEnabled,
  };
}

function mapDispatchToProps() {
  return {};
}

InfusionLabel.propTypes = {
  alternatePrintFormatIsEnabled: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

const BASE_CLASS_NAME = 'label label--infusion';

function InfusionLabel({
  alternatePrintFormatIsEnabled,
  className,
  ...restProps
}) {
  const formatClassName = !alternatePrintFormatIsEnabled
    ? 'label--alternate-format'
    : '';
  return (
    <article
      className={reduceClassNames(BASE_CLASS_NAME, formatClassName, className)}
      {...restProps}
    >
      <div className="label__body">
        <div className="label__upper-half">
          <LabelHeader />
          <PatientSection className="mb-1" />
          <StudySection className="mb-1" />
          <MedicationSection className="mb-1" />
          <ProvidersSection />
        </div>
        <div className="label__lower-half">
          <DispenseSection />
        </div>
      </div>
    </article>
  );
}
