import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from './App';
import ProtectedRoute from './routes/privateRoute';
import Dashboard from './pages/Dashboard';

// Helper function to render components with MemoryRouter
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: MemoryRouter });
};

describe('App Routing', () => {

  it('should render Dashboard component on /dashboard route if authenticated', () => {
    // Custom render function with a mocked router to simulate being logged in
    const history = createMemoryHistory({ initialEntries: ['/dashboard'] });
    render(
      <Router location={history.location} navigator={history}>
        <ProtectedRoute isAuthenticated={true}>
          <Dashboard />
        </ProtectedRoute>
      </Router>
    );
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });

});
