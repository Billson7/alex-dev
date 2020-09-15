import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


describe('Renders Page sections without errors', () => {
  it('renders page section', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId("page-section")).toBeTruthy()
  })

  it('renders logo section', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('logo-section')).toBeTruthy()
  })

  it('renders left section', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('left-side-content')).toBeTruthy()
  })

  it('renders heading by text', () => {
    const { getByText } = render(<App />)
    expect(getByText('SOFTWARE DEVELOPER')).toBeTruthy()
  })

  it('renders bio infomation by text', () => {
    const { getByText } = render(<App />)
    expect(getByText('I am a Leeds based, front-end Software Developer.')).toBeTruthy()
  })

  it('renders header section', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('left-side-content')).toBeTruthy()
  })
})
