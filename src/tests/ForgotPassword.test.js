import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';

describe("ForgotPassword page tests", () => {
    test("renders forgot password content", () => {
        // Render the component with MemoryRouter and desired route
        render(
            <MemoryRouter initialEntries={['/reset-password']}>
                <ForgotPassword />
            </MemoryRouter>
        );
        const passwordText = screen.queryByText(/Forgot your password/i);
        expect(passwordText).toBeInTheDocument();
    });
});