import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';

import Layout from './index';

afterEach(cleanup);

describe('<Layout>{children}</Layout>', () => {
  test('Renders passed children.', () => {
    const { queryByTestId } = render(
      <Layout>
        <div data-testid="target" />
      </Layout>,
    );
    expect(queryByTestId('target')).toBeInTheDocument();
  });
});
