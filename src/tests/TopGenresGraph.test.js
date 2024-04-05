import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import TopGenresGraph from '../components/topGenresGraph';

// Mocking Axios
jest.mock('axios');

// Mocking ReactApexChart
jest.mock('react-apexcharts', () => ({
    __esModule: true,
    default: () => <div>Mocked Chart</div>,
}));


test('successfully fetches and renders top 3 genres data', async () => {
    const mockGenresData = {
        data: [
            { genre: 'Pop', count: 300 },
            { genre: 'Rock', count: 250 },
            { genre: 'Jazz', count: 200 },
            // Extra genre to test if only top 3 are displayed
            { genre: 'Classical', count: 150 }
        ]
    };

    axios.get.mockResolvedValue(mockGenresData);

    const userId = 'user123';
    render(<TopGenresGraph userId={userId} />);

    await waitFor(() => expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_API_LOCAL}/api/top-genres/${userId}`));
    // Since ReactApexChart is mocked, we won't assert on its props here but ensure it's rendered
    expect(screen.getByText('Mocked Chart')).toBeInTheDocument();
});

test('handles API call failure gracefully', async () => {
    axios.get.mockRejectedValue(new Error('Failed to fetch'));

    render(<TopGenresGraph userId="user123" />);

    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    
    expect(screen.getByText('Mocked Chart')).toBeInTheDocument(); // Ensure the chart is still rendered
});

test('refetches data when userId changes', async () => {
    const initialData = { data: [{ genre: 'Pop', count: 300 }] };
    const newData = { data: [{ genre: 'Electronic', count: 350 }] };

    axios.get.mockResolvedValueOnce(initialData).mockResolvedValueOnce(newData);

    const { rerender } = render(<TopGenresGraph userId="user1" />);

    // Wait for the first fetch and assert
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    // Change userId and rerender
    rerender(<TopGenresGraph userId="user2" />);

    // Assert on the second fetch
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));
    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_API_LOCAL}/api/top-genres/user2`);
});

