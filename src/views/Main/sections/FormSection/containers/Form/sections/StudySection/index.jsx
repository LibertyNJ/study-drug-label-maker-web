import React from 'react';

import Column from '../../../../../../../../components/Column';
import FormRow from '../../../../../../../../components/FormRow';
import ConnectedInput from '../../../../../../../../containers/ConnectedInput';
import FormSubsection from '../../components/FormSubsection';
import StudyRxNumberOverrideToggle from './containers/StudyRxNumberOverrideToggle';

export default function StudySection({ ...restProps }) {
  return (
    <FormSubsection heading="Study" {...restProps}>
      <FormRow>
        <Column>
          <ConnectedInput
            label="Protocol"
            name="studyProtocol"
            placeholder="D3561C00009…"
            required
            type="text"
          />
        </Column>
        <Column>
          <ConnectedInput
            append={<StudyRxNumberOverrideToggle />}
            info="Generated when label is printed."
            label="Rx number"
            name="studyRxNumber"
            placeholder="20181203112556…"
            required
            type="text"
          />
        </Column>
      </FormRow>
      <FormRow>
        <Column span={6}>
          <ConnectedInput
            label="Patient number"
            name="studyPatientNumber"
            placeholder="002806…"
            required
            type="text"
          />
        </Column>
      </FormRow>
    </FormSubsection>
  );
}
