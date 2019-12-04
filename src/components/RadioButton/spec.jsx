import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  cleanup, fireEvent, render, wait,
} from '@testing-library/react';

import RadioButton from './index';

afterEach(cleanup);

describe('<RadioButton label={} name={} value={} />', () => {
  test('Displays label text.', () => {
    const { queryByText } = render(<RadioButton label="foo" name="bar" value="baz" />);
    expect(queryByText('foo')).toBeInTheDocument();
  });

  test('Clicking on the label element checks the input element.', () => {
    const { queryByLabelText, queryByText } = render(
      <RadioButton label="foo" name="bar" value="baz" />,
    );
    fireEvent.click(queryByText('foo'));
    expect(queryByLabelText('foo')).toHaveProperty('checked', true);
  });

  test('Clicking on the label element focuses the input element.', () => {
    const { queryByLabelText, queryByText } = render(
      <RadioButton label="foo" name="bar" value="baz" />,
    );
    fireEvent.click(queryByText('foo'));
    wait(() => expect(queryByLabelText('foo')).toHaveFocus());
  });
});
