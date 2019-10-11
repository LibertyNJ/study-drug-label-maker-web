'use-strict';

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  cleanup, fireEvent, render, wait,
} from '@testing-library/react';

import Input from './index';

afterEach(cleanup);

describe('<Input label={} name={} />', () => {
  test('Displays label text.', () => {
    const { queryByText } = render(<Input label="foo" name="bar" type="text" />);
    expect(queryByText('foo')).toBeInTheDocument();
  });

  test('Displays string passed in info prop.', () => {
    const { queryByText } = render(<Input info="foo" label="bar" name="baz" type="text" />);
    expect(queryByText('foo')).toBeInTheDocument();
  });

  test('Clicking on the label element focuses the input element.', () => {
    const { queryByLabelText, queryByText } = render(<Input label="foo" name="bar" type="text" />);
    fireEvent.click(queryByText('foo'));
    wait(() => expect(queryByLabelText('foo')).toHaveFocus());
  });
});
