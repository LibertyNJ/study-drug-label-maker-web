import PropTypes from 'prop-types';
import React from 'react';

const LabelSection = ({ children, className }) => (
  <section className={`mb-1 ${className}`}>{children}</section>
);

LabelSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

LabelSection.defaultProps = {
  className: undefined,
};

export default LabelSection;
