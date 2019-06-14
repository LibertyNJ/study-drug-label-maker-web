import React from 'react';

import Label from './Label';

const PreviewSection = props => (
  <section id="preview-section" className="col d-flex flex-column d-print-block">
    <Header />
    <div className="d-flex d-print-block justify-content-around align-items-center flex-grow-1 overflow-auto flex-wrap">
      <Label {...props} />
    </div>
  </section>
);

const Header = () => (
  <header className="d-print-none">
    <h2 className="text-primary">Preview</h2>
  </header>
);

export default PreviewSection;
