import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ReactApexChart from "react-apexcharts";
import axios from 'axios';

function TopGenresGraph({ userId }) {
    const [topGenres, setTopGenres] = useState({ categories: [], seriesData: [] });

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_LOCAL}/api/top-genres/${userId}`)
            .then(response => {
                // Assuming the response has the data in the format [{name: 'genreName', count: genreCount}, ...]
                const topThreeGenres = response.data.slice(0, 3); // show only top 3 genres, slice the array

                const categories = topThreeGenres.map(genre => genre.genre);
                const seriesData = topThreeGenres.map(genre => genre.count);

                setTopGenres({ categories, seriesData });
            })
            .catch(error => {
                console.error('Error fetching top genres:', error);
            });
    }, [userId]);

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
            categories: topGenres.categories,
            labels: {
                rotate: 0, // This will make the labels horizontal
                style: {
                    fontSize: '10px', // Adjust the font size as needed
                  },
            }
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
        data: topGenres.seriesData,
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
