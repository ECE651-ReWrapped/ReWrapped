import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import Dashboard from '../pages/Dashboard';

const sampleSongData = [
    {
      track_name: "In the End",
      artists: "Carly Rae Jepsen",
      album: "Cut To The Feeling",
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
    },
    {
      track_name: "Crawling",
      artists: "Carly Rae Jepsen",
      album: "Cut To The Feeling",
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
    },
    {
      track_name: "Cut To The Feeling",
      artists: "Carly Rae Jepsen",
      album: "Cut To The Feeling",
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
    },
    {
      track_name: "Cut To The Feeling",
      artists: "Carly Rae Jepsen",
      album: "Cut To The Feeling",
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
    },
    {
      track_name: "Cut To The Feeling",
      artists: "Carly Rae Jepsen",
      album: "Cut To The Feeling",
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
    },
    {
      track_name: "Cut To The Feeling",
      artists: "Carly Rae Jepsen",
      album: "Cut To The Feeling",
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
    },
    {
      track_name: "Cut To The Feeling",
      artists: "Carly Rae Jepsen",
      album: "Cut To The Feeling",
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
    }
  ];


jest.mock('axios');

describe('Dasboard component', () => {
  beforeEach(() => {
    // Mock API response for axios.get
    axios.get.mockResolvedValue({ data: sampleSongData });
  });

  test('renders loading state while fetching data', async () => {
    // Render the component
    const { getByText } = render(<Dashboard />);

    // Assert that loading state is displayed
    expect(getByText('Loading...')).toBeInTheDocument();

    // Wait for the component to finish fetching data
    await new Promise((resolve) => setTimeout(resolve, 500)); // Adjust timeout as needed

    // Assert that loading state is no longer displayed
    expect(queryByText('Loading...')).toBeNull();

    // Assert that the items are rendered
    expect(getByText('In the End')).toBeInTheDocument();
    expect(getByText('Crawling')).toBeInTheDocument();
  });
});