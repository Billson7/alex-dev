import { render } from '@testing-library/react';
import React from 'react';
import { Cool } from '.';

test('renders Cool section correctly', () => {
  const { container } = render(
    <Cool heading="heading" caption="caption" intro="intro" />
  );

  expect(container).toMatchSnapshot();
});
