import * as React from 'react';
import Box from '@mui/material/Box';
import ReactApexChart from "react-apexcharts";

function ListeningTrendsGraph({ userData }) {
    const options = {
        chart: {
            id: 'listening-trends-chart',
            zoom: {
                enabled: false
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 0,
                opacityFrom: 0.5,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            }
        },
    };

    const series = [{
        name: "Streams",
        data: [100, 40, 35, 50, 49, 60],
        type: 'area',
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

export default ListeningTrendsGraph;
