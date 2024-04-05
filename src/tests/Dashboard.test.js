import Dashboard from '../pages/Dashboard';
import { Provider } from 'react-redux';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store/index';

describe("Dasboard component", () => {
    test("renders dash", () => {
        render(
            <MemoryRouter initialEntries={['/dashboard']}>
                <Provider store={store}>
                    <Dashboard />
                </Provider>
            </MemoryRouter>
        );

       // Check if the dashboard component is rendered
    //    const dashboardElement = getByTestId('Rewrapped');
    //    expect(dashboardElement).toBeInTheDocument();

       // Check if all required elements are present
       const tc0 = screen.queryByText('Spotify ReWrapped.');
       expect(tc0).toBeInTheDocument();

       const tc1 = screen.queryByText('Listen with your friends and discover new music');
       expect(tc1).toBeInTheDocument();

       const tc2 = screen.queryByText('Top Songs from your friends');
       expect(tc2).toBeInTheDocument();
    
       const tc3 = screen.queryByText('Based on your groups listening history');
       expect(tc3).toBeInTheDocument();


        
       //    const headingElement = getByTestId('dashboard-heading');
    //    const chartElement = getByTestId('dashboard-chart');
    //    const statsElement = getByTestId('dashboard-stats');

    //    expect(headingElement).toBeInTheDocument();
    //    expect(chartElement).toBeInTheDocument();
    //    expect(statsElement).toBeInTheDocument();
    });
   
});

// describe('Dashboard component', () => {
//     const testStore = createTestStore();
//     it('renders correctly', () => {
//         const { getByTestId } = render(
//             <Provider store={testStore}>
              
//                     <Dashboard />
              
//             </Provider>
//         );

//         // Check if the dashboard component is rendered
//         const dashboardElement = getByTestId('dashboard');
//         expect(dashboardElement).toBeInTheDocument();

//         // Check if all required elements are present
//         const headingElement = getByTestId('dashboard-heading');
//         const chartElement = getByTestId('dashboard-chart');
//         const statsElement = getByTestId('dashboard-stats');

//         expect(headingElement).toBeInTheDocument();
//         expect(chartElement).toBeInTheDocument();
//         expect(statsElement).toBeInTheDocument();
//     });

//     // it('displays correct data', () => {
//     //     // Mock data
//     //     const mockData = {
//     //         heading: 'Dashboard',
//     //         chartData: [10, 20, 30, 40, 50],
//     //         stats: {
//     //             users: 100,
//     //             revenue: '$1000',
//     //         },
//     //     };

//         // const { getByTestId } = render(
//         //     <Provider store={testStore}>
//         //         <BrowserRouter>
//         //             <Dashboard />
//         //         </BrowserRouter>
//         //     </Provider >);

//         // // Check if the heading displays correctly
//         // const headingElement = getByTestId('dashboard-heading');
//         // expect(headingElement).toHaveTextContent(mockData.heading);

//         // // Check if the chart displays correct data points
//         // const chartElement = getByTestId('dashboard-chart');
//         // expect(chartElement).toHaveTextContent('10'); // Assuming chart displays first data point

//         // // Check if the stats display correct information
//         // const statsElement = getByTestId('dashboard-stats');
//         // expect(statsElement).toHaveTextContent(`Users: ${mockData.stats.users}`);
//         // expect(statsElement).toHaveTextContent(`Revenue: ${mockData.stats.revenue}`);
//     //});
// });