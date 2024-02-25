import * as React from 'react';
import Box from '@mui/material/Box';
import ReactApexChart from "react-apexcharts";

function TopGenresGraph({ userData }) {
    const options = {
        chart: {
            type: 'bar',
            zoom: {
                enabled: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 5,
                borderRadiusApplication: 'end',
                columnWidth: '50%',
                dataLabels: {
                    position: 'top',
                    hideOverflowingLabels: true,
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['category A', 'category B', 'category C'],
        },
        yaxis: {
            reversed: false,
            labels: {
                show: false,
            },
        }

    };

    const series = [{
        name: 'Top Genres',
        data: [10, 18, 13],
    }];

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                width={356}
                height={240}
            />
        </Box>
    );
};

export default TopGenresGraph;
