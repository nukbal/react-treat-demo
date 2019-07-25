import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('test', () => {
  const { getByText } = render(<App />);
  it('theme', () => {
    getByText('current : light mode');
    fireEvent.click(getByText('toggle theme'));
    getByText('current : dark mode');
  });

  it('counter', () => {
    getByText('count: 0');
    fireEvent.click(getByText('+'));
    getByText('count: 1');
    fireEvent.click(getByText('-'));
    getByText('count: 0');
  });
});
