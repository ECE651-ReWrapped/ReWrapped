import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import SetNewPassword from '../pages/SetNewPassword';
import { BrowserRouter as Router } from 'react-router-dom';

// Mocking axios, useNavigate
jest.mock('axios');
const mockNavigate = jest.fn();

// Mocking useParams and useNavigate
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        token: 'mockedToken',
    }),
    useNavigate: () => mockNavigate,
}));

beforeEach(() => {
    axios.get.mockClear();
    axios.put.mockClear();
    mockNavigate.mockClear();
});

describe('SetNewPassword Component', () => {
    test('validates token successfully and renders the form', async () => {
        axios.get.mockResolvedValue({ status: 200 });

        render(
            <Router>
                <SetNewPassword />
            </Router>
        );

        await waitFor(() => screen.getByLabelText("Password"));
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
    });

    test('handles token validation failure by rendering InvalidLink', async () => {
        axios.get.mockResolvedValue({ status: 405 });

        render(
            <Router>
                <SetNewPassword />
            </Router>
        );

        await waitFor(() => screen.getByText("Loading..."));
        expect(screen.queryByLabelText("Password")).not.toBeInTheDocument();
    });

    test('updates password and confirm password fields', async () => {
        axios.get.mockResolvedValue({ status: 200 });

        render(
            <Router>
                <SetNewPassword />
            </Router>
        );
        await waitFor(() => screen.getByLabelText("Password"));

        const passwordInput = screen.getByLabelText("Password");
        fireEvent.change(passwordInput, { target: { value: 'newpassword123' } });
        expect(passwordInput.value).toBe('newpassword123');

        const confirmPasswordInput = screen.getByLabelText("Confirm Password");
        fireEvent.change(confirmPasswordInput, { target: { value: 'newpassword123' } });
        expect(confirmPasswordInput.value).toBe('newpassword123');
    });

    test('handles unknown error during token validation', async () => {
        axios.get.mockRejectedValue(new Error('Network error')); // Simulate network error

        render(
            <Router>
                <SetNewPassword />
            </Router>
        );

        // Wait for the component to show loading state
        await waitFor(() => screen.getByText(/loading/i));
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    test('handles successful password reset', async () => {
        // Mock both token validation and password reset success
        axios.get.mockResolvedValue({ status: 200 });
        axios.put.mockResolvedValue({ status: 200 });

        render(
            <Router>
                <SetNewPassword />
            </Router>
        );

        // Wait for the token validation to complete
        await waitFor(() => screen.getByLabelText("Password"));

        // Simulate form fill and submit
        fireEvent.change(screen.getByLabelText("Password"), { target: { value: 'newpassword123' } });
        fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: 'newpassword123' } });
        fireEvent.click(screen.getByText(/reset password/i));

        // Check if navigate was called after successful reset
        await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/'));
    });
});
