import { render, screen } from '@testing-library/react';
import React from 'react';
import { Hero } from '.';

describe('Hero Section', () => {
  test('renders Hero section correctly', () => {
    const { container } = render(
      <Hero heading="heading" caption="caption" intro="intro" />
    );

    expect(container).toMatchSnapshot();
  });

  test('renders Hero section heading', () => {
    render(<Hero heading="heading" caption="caption" intro="intro" />);

    expect(screen.getByTestId('profile-heading')).toBeInTheDocument();
  });

  test('renders Hero section caption', () => {
    render(<Hero heading="heading" caption="caption" intro="intro" />);

    expect(screen.getByTestId('profile-caption')).toBeInTheDocument();
  });

  test('renders Hero section intro', () => {
    render(<Hero heading="heading" caption="caption" intro="intro" />);

    expect(screen.getByTestId('profile-intro')).toBeInTheDocument();
  });
});
