// __tests__/Calculator.test.js
import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './calculator.jsx';

describe('Calculate component', () => {
  test('renders the calculator', () => {
    render(<Calculator />);
    const heading = screen.getByText(/lets do some math!/i);
    expect(heading).to
  });

  test('calculates and displays result', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));

    const result = screen.getByDisplayValue('4');
    expect(result).toBeInTheDocument();
    
  });
});
