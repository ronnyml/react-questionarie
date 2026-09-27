import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import StickyBottomBar from '../components/StickyBar';
import { stepsData } from '../data/steps';

describe('StickyBottomBar', () => {
  const handleBack = vi.fn();
  const isFormValid = false;
  const numSteps = stepsData.length;

  beforeEach(() => {
    render(
      <StickyBottomBar
        handleBack={handleBack}
        isFormValid={isFormValid}
        step={stepsData[0]}
        numSteps={numSteps}
      />
    );
  });

  it('renders Go Back button correctly', () => {
    const goBackButton = screen.getByText('Go Back');
    expect(goBackButton).toBeInTheDocument();

    fireEvent.click(goBackButton);
    expect(handleBack).toHaveBeenCalledTimes(1);
  });

  it('renders Save and Continue button correctly', () => {
    const saveContinueButton = screen.getByText('Save and Continue');
    expect(saveContinueButton).toBeInTheDocument();

    fireEvent.click(saveContinueButton);
  });

  it('disables Save and Continue button when form is not valid', () => {
    const saveContinueButton = screen.getByText('Save and Continue');
    expect(saveContinueButton).toBeDisabled();
  });
});
