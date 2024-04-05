import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for Link component
import AppBar from '../components/appBar'; // Replace 'AppBar' with the actual name of your component

describe('AppBar component', () => {
    it('renders correctly', () => {
        render(
            <Router>
                <AppBar />
            </Router>
        );

        // Check if certain elements are rendered
        expect(screen.getByText('S.R')).toBeInTheDocument(); // Check for the 'SR' text
        expect(screen.getByLabelText('account of current user')).toBeInTheDocument(); // Check for the user account icon
    });

    // You can add more specific tests for interactions or navigation if needed
});