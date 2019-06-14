import React from 'react';

import ContactSection from '../components/HelpView/ContactSection';
import ContentSection from '../components/HelpView/ContentSection';
import TopicsSection from '../components/HelpView/TopicsSection';

const HelpView = () => (
  <React.Fragment>
    <div className="row flex-shrink-0">
      <Header />
    </div>
    <div className="row">
      <TopicsSection />
      <ContentSection />
      <ContactSection />
    </div>
  </React.Fragment>
);

const Header = () => (
  <header className="col text-primary">
    <h1 className="text-center">Help</h1>
  </header>
);

export default HelpView;
