'use-strict';

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  cleanup, fireEvent, render, wait,
} from '@testing-library/react';

import Toggle from './index';

afterEach(cleanup);

describe('<Toggle label={} name={} type={} />', () => {
  test('Displays label text.', () => {
    const { queryByText } = render(<Toggle label="foo" name="bar" type="checkbox" />);
    expect(queryByText('foo')).toBeInTheDocument();
  });

  test('Clicking on the label element checks the input element.', () => {
    const { queryByLabelText, queryByText } = render(
      <Toggle label="foo" name="bar" type="checkbox" />,
    );
    fireEvent.click(queryByText('foo'));
    expect(queryByLabelText('foo')).toHaveProperty('checked', true);
  });

  test('Clicking on the label element focuses the input element.', () => {
    const { queryByLabelText, queryByText } = render(
      <Toggle label="foo" name="bar" type="checkbox" />,
    );
    fireEvent.click(queryByText('foo'));
    wait(() => expect(queryByLabelText('foo')).toHaveFocus());
  });
});
