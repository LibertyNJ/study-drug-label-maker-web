import React from 'react';

import PrintButton from './components/PrintButton';
import AlternatePrintFormatToggle from './containers/AlternatePrintFormatToggle';
import FormSubsection from '../../components/FormSubsection';
import Column from '../../../../../../../../components/Column';
import FormRow from '../../../../../../../../components/FormRow';

export default function PrintSection({ ...restProps }) {
  return (
    <FormSubsection heading="Print" {...restProps}>
      <FormRow>
        <Column className="d-flex align-items-center">
          <AlternatePrintFormatToggle />
        </Column>
        <Column>
          <PrintButton className="d-block ml-auto" />
        </Column>
      </FormRow>
    </FormSubsection>
  );
}
