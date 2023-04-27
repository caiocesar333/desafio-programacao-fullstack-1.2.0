import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorComponent from '../../ErrorComponent';

afterEach(() => {
    cleanup();
});

test('renders error message correctly', () => {
    const errorMessage = 'Something went wrong';
    const { getByText } = render(<ErrorComponent message={errorMessage} />);
    expect(getByText(errorMessage)).toBeInTheDocument();
});

test('renders correct styles', () => {
    const errorMessage = 'Something went wrong';
    const { container } = render(<ErrorComponent message={errorMessage} />);
    const errorDiv = container.firstChild;
    expect(errorDiv).toHaveClass('bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative');
});