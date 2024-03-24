import React from 'react'
import ResponsiveAppBar from '../components/appBar';
import RecommendationCard from '../components/RecommendationCard';
import { Tooltip, Box } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const staticRecommendationsData = [
    {
        nameOfSong: "Live From Space",
        nameOfArtist: "Mac Miller",
        songImage: "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        nameOfSong: "Another song 1",
        nameOfArtist: "Another singer",
        songImage: "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        nameOfSong: "Another song 2",
        nameOfArtist: "Another singer",
        songImage: "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        nameOfSong: "Another song 3",
        nameOfArtist: "Another singer",
        songImage: "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const Recommendations = () => {
  const topArtistSeeds = useSelector(state => state.spotify.seed_top_artists);  
  const topTrackSeeds = useSelector(state => state.spotify.seed_top_tracks);  
  const [ currIndex, setCurrIndex ] = useState(0);

  const handleNextCard = () => {
    setCurrIndex((prevState) => {
        if (prevState === (staticRecommendationsData.length-1)) {
            return 0;
        }
        return (prevState + 1);
    } );
  };

  const handlePreviousCard = () => {
    setCurrIndex((prevState) => {
        if (prevState === 0) {
            return (staticRecommendationsData.length - 1);
        }
        return (prevState - 1);
    } );
  };

  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ gap: 2, display: "flex", flexDirection: "column"}}>
        <RecommendationCard 
            nameOfSong={staticRecommendationsData[currIndex].nameOfSong} 
            nameOfArtist={staticRecommendationsData[currIndex].nameOfArtist} 
            songImage={staticRecommendationsData[currIndex].songImage} 
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Tooltip title="Previous song">
                <IconButton aria-label="Next song" onClick={handlePreviousCard} sx={{ "&:hover": { backgroundColor: 'transparent'}}} >
                    <KeyboardArrowLeftIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Next song">
                <IconButton aria-label="Next song" onClick={handleNextCard} sx={{ "&:hover": { backgroundColor: 'transparent'}}} >
                    <KeyboardArrowRightIcon />
                </IconButton>
            </Tooltip>
        </Box>
      </Box>
    </>
  );
};

export default Recommendations;
