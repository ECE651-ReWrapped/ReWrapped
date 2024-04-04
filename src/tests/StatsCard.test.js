import React from 'react';
import { render } from '@testing-library/react';
import StatsCard from '../components/statsCard';

describe('StatsCard component', () => {
  it('renders with correct content', () => {
    const props = {
      title: 'Total Users',
      value: 1000,
      subtitle: 'Registered users',
    };

    const { getByText } = render(<StatsCard {...props} />);

    // Check if the title is rendered
    const titleElement = getByText(props.title);
    expect(titleElement).toBeInTheDocument();

    // Check if the value is rendered
    const valueElement = getByText(props.value.toString()); // Convert number to string for comparison
    expect(valueElement).toBeInTheDocument();

    // Check if the subtitle is rendered
    const subtitleElement = getByText(props.subtitle);
    expect(subtitleElement).toBeInTheDocument();
  });

  it('renders with correct styles', () => {
    const props = {
      title: 'Total Users',
      value: 1000,
      subtitle: 'Registered users',
    };

    const { getByTestId } = render(<StatsCard {...props} />);

    // Check if the component has the correct test ID
    const cardComponent = getByTestId('stats-card');
    expect(cardComponent).toBeInTheDocument();

  });
});