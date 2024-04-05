import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ReactApexChart from "react-apexcharts";
import axios from 'axios';



function ListeningTrendsGraph({ userId }) { // NOSONAR
    const [listeningTrends, setListeningTrends] = useState({ categories: [], seriesData: [] });

    useEffect(() => {
        // Fetch the listening trends data from the API
        axios.get(`${process.env.REACT_APP_API_LOCAL}/api/listening-trends/${userId}`)
            .then(response => {
                // Assuming the response has the data in the format [{month: 'Jan', streams: 100}, ...]
                const data = response.data;

                const categories = data.map(item => item.month);
                const seriesData = data.map(item => item.streams);

                setListeningTrends({ categories, seriesData });
            })
            .catch(error => {
                console.error('Error fetching listening trends:', error);
            });
    }, [userId]);

    const options = {
        chart: {
            id: 'listening-trends-chart',
            zoom: {
                enabled: false
            }
        },
        xaxis: {
            categories: listeningTrends.categories
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
        data: listeningTrends.seriesData,
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
