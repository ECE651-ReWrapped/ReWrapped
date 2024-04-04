import ResponsiveAppBar from '../components/appBar';
import RecommendationCard from '../components/RecommendationCard';
import { Tooltip, Box, CircularProgress } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";

const staticRecommendationsData = [
    {
        nameOfSong: "Live From Space",
        nameOfArtist: "Mac Miller",
        songImage: "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        nameOfSong: "Hotel California",
        nameOfArtist: "Eagles",
        songImage: "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        nameOfSong: "Rolling in the Deep",
        nameOfArtist: "Adele",
        songImage: "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        nameOfSong: "Smells Like Teen Spirit",
        nameOfArtist: "Nirvana",
        songImage: "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        nameOfSong: "Billie Jean",
        nameOfArtist: "Michael Jackson",
        songImage: "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        nameOfSong: "Purple Rain",
        nameOfArtist: "Prince",
        songImage: "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        nameOfSong: "Yesterday",
        nameOfArtist: "The Beatles",
        songImage: "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        nameOfSong: "Lose Yourself",
        nameOfArtist: "Eminem",
        songImage: "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];

const Recommendations = () => {
    const topArtistSeeds = useSelector(state => state.spotify.seed_top_artists);
    const topTrackSeeds = useSelector(state => state.spotify.seed_top_tracks);
    const accessToken = useSelector(state => state.spotify.accessToken);
    const [currIndex, setCurrIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [recommendationData, setRecommendationData] = useState([]);

    useEffect(() => {
        const getApiData = async () => {
            try {
                const res = await axios.get("https://api.spotify.com/v1/recommendations", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    params: {
                        limit: 8, // number of recommendations displayed to user
                        seed_tracks: topTrackSeeds[1], // using only one seed
                        seed_artists: topArtistSeeds[1] // using only one seed
                    },
                });
                setRecommendationData(res.data.tracks);
                setIsLoading(false);

            } catch (err) {
                console.error("Failed to fetch data from api: ", err);
            }
        };
        getApiData();
    }, []);

    const handleNextCard = () => {
        setCurrIndex((prevState) => {
            if (prevState === 7) { // 8 max recommendations
                return 0;
            }
            return (prevState + 1);
        });
    };

    const handlePreviousCard = () => {
        setCurrIndex((prevState) => {
            if (prevState === 0) {
                return 7;           // 8 max recommendations
            }
            return (prevState - 1);
        });
    };

    return (
        <>
            <ResponsiveAppBar />
            {isLoading && <CircularProgress sx={{ marginLeft: '50%', marginTop: "20px" }} />}
            {!isLoading && <Box sx={{ gap: 2, display: "flex", flexDirection: "column" }}>
                <RecommendationCard
                    nameOfSong={recommendationData.length !== 0 ? recommendationData[currIndex].name : staticRecommendationsData[currIndex].nameOfSong}
                    nameOfArtist={recommendationData.length !== 0 ? recommendationData[currIndex].artists[0].name : staticRecommendationsData[currIndex].nameOfArtist}
                    songImage={recommendationData.length !== 0 ? recommendationData[currIndex].album.images[0].url : staticRecommendationsData[currIndex].songImage}
                />

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Tooltip title="Previous song">
                        <IconButton aria-label="Next song" onClick={handlePreviousCard} sx={{ "&:hover": { backgroundColor: 'transparent' } }} >
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Next song">
                        <IconButton aria-label="Next song" onClick={handleNextCard} sx={{ "&:hover": { backgroundColor: 'transparent' } }} >
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>}
        </>
    );
};

export default Recommendations;
