import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import ListeningTrendsGraph from '../components/listeningTrendsGraph';

jest.mock('axios');

jest.mock('react-apexcharts', () => {
    return {
        __esModule: true,
        default: () => {
            return <div>Mock Chart</div>;
        },
    };
});

test('fetches and displays data successfully', async () => {
    const mockData = { data: [{ month: 'Jan', streams: 100 }, { month: 'Feb', streams: 200 }] };
    axios.get.mockResolvedValue(mockData);

    render(<ListeningTrendsGraph userId="123" />);

    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    expect(screen.getByText('Mock Chart')).toBeInTheDocument();
});

test('handles API failure gracefully', async () => {
    axios.get.mockRejectedValue(new Error('API Error'));

    render(<ListeningTrendsGraph userId="123" />);

    await waitFor(() => expect(axios.get).toHaveBeenCalled());
});

