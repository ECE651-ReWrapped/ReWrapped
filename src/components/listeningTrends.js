import * as React from 'react';
import Box from '@mui/material/Box';
import ReactApexChart from "react-apexcharts";

function ListeningTrends({ userData }) {
    const options = {
        chart: {
            id: 'listening-trends-chart'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        
    };

    const series = [{
        name: "Listening Trends",
        data: [30, 40, 35, 50, 49, 60] 
    }];

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                width={356}
                height={240}
            />
        </Box>
    );
};

export default ListeningTrends;
