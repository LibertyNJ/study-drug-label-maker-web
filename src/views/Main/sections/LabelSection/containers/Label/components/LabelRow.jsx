import PropTypes from 'prop-types';
import React from 'react';

LabelRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function LabelRow({ children }) {
  return <div className="d-flex justify-content-between">{children}</div>;
}
