import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SearchCard from '../components/SearchCard';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for Link component

// Mocks
jest.mock('axios');

const mockStore = configureMockStore();
const store = mockStore({
  currentUserDetails: {
    userEmail: 'test@example.com',
  },
  // Add other initial state properties as needed for your test
});

const mockUser = {
  user_id: '1',
  user_name: 'John Doe',
};

describe('SearchCard', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { isFollowed: false } });
    axios.post.mockResolvedValue({});
    axios.delete.mockResolvedValue({});
  });

  it('renders as expected', () => {
    render(
      <Provider store={store}>
        <SearchCard user={mockUser} key={mockUser.user_id} />
      </Provider>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Follow')).toBeInTheDocument();
    expect(screen.getByText('Add Playlist')).toBeInTheDocument();
  });

  it('changes button text to "Unfollow" when followUser is successful', async () => {
    render(
      <Provider store={store}>
        <SearchCard user={mockUser} key={mockUser.user_id} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Follow'));

    await waitFor(() => {
      expect(screen.getByText('Unfollow')).toBeInTheDocument();
    });
  });

  it('changes button text to "Follow" when unfollowUser is successful', async () => {
    axios.get.mockResolvedValue({ data: { isFollowed: true } });
    render(
      <Provider store={store}>
        <SearchCard user={mockUser} key={mockUser.user_id} />
      </Provider>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByText('Unfollow'));
    });

    await waitFor(() => {
      expect(screen.getByText('Follow')).toBeInTheDocument();
    });
  });

  it('displays the PlaylistDialog when "Add Playlist" is clicked', async () => {
    render(
      <Provider store={store}>
        <Router>
          <SearchCard user={mockUser} key={mockUser.user_id} />
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getByText('Add Playlist'));

    await waitFor(() => {
      expect(screen.getByText("Create a new Playlist")).toBeInTheDocument();
    });
  });

  it('handles API errors gracefully', async () => {
    axios.post.mockRejectedValue(new Error('API Error'));
    render(
      <Provider store={store}>
        <>
          <ToastContainer />
          <SearchCard user={mockUser} />
        </>
      </Provider>
    );

    fireEvent.click(screen.getByText('Follow'));

    await waitFor(() => {
      expect(screen.getByText('An error occurred.')).toBeInTheDocument();
    });
  });
});
