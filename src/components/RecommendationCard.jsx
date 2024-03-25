import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Tooltip, Box } from '@mui/material';

export default function RecommendationCard(props) {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "3%" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={props.songImage}
          alt="Song image not available"
        />
        <CardContent>
          <Typography component="div" variant="h5">
            {props.nameOfSong}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.nameOfArtist}
          </Typography>
        </CardContent>
        <CardActions sx={{
          display: "flex",
          justifyContent: 'space-evenly'
        }}>
          <Tooltip title="Like this song!">
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share with friends!">
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add to your playlist!">
            <IconButton aria-label="add playlist" >
              <PlaylistAddIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Box>
  );
}

