// __tests__/Calculator.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './calculator';

describe('Calculate component', () => {
  test('renders the calculator', () => {
    render(<Calculator />);
    const heading = screen.getByText(/lets do some math!/i);
    expect(heading).toBeInTheDocument();
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
  test('subtracts numbers correctly', () => {
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    const result = screen.getByRole('textbox');
    expect(result).toHaveValue('2'); // Expect the result to be 2
  });

  test('multiplies numbers correctly', () => {
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));

    const result = screen.getByRole('textbox');
    expect(result).toHaveValue('8'); // Expect the result to be 8
  });

  test('divides numbers correctly', () => {
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));

    const result = screen.getByRole('textbox');
    expect(result).toHaveValue('4'); // Expect the result to be 4
  });

  test('handles multiple operations correctly', () => {
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));

    const result = screen.getByRole('textbox');
    expect(result).toHaveValue('16'); // Expect the result to be 16 (3 + 5 * 2)
  });
});
