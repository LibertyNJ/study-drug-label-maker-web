import React from 'react';

import ContentSubsection from './ContentSubsection';

const StepByStepGuide = () => (
  <ContentSubsection heading="Step-by-step guide">
    <ol>
      <li>Select the desired label type.</li>
      <li>
        Fill in each field of the form as appropriate. Note that the preview will update in real
        time as you enter data.
      </li>
      <ul>
        <li>If you need to enter a custom Rx number, enable the “Override” switch.</li>
        <li>
          If the medication does not have a quantified strength, enable the “No strength” switch.
        </li>
        <li>
          If you are printing on a label printer in the main pharmacy, enable the “Main pharmacy
          print format” switch.
        </li>
      </ul>
      <li>
        Press the “Print” button. If a required field is empty, the application will direct you to
        complete it.
      </li>
    </ol>
  </ContentSubsection>
);

export default StepByStepGuide;
