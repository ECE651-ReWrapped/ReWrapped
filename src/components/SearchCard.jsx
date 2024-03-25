import { Card, Button, Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import PlaylistDialog from "./PlaylistDialog";

const SearchCard = ({ user }) => {
  const [addToPlaylist, setAddToPlaylist] = useState(false);

  const handleAddToPlaylist = () => {
    setAddToPlaylist(true);
  };

  const followUser = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_LOCAL}/`);
    } catch (err) {
      console.err("Failed to follow");
    }
  };

  const unfollowUser = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_LOCAL}/`);
    } catch (err) {
      console.err("Failed to follow");
    }
  };

  return (
    <Card
      sx={{ minWidth: 550, minHeight: 40 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: ".5rem",
        margin: ".5rem 0",
      }}
    >
      {user.user_name}
      <Box>
        {/* //If user is followed render the unfollow button, else render follow button */}
        { !addToPlaylist && 
          <>
            <Button>Follow</Button>
            <Button onClick={handleAddToPlaylist}>Add to Playlist</Button>
          </>
        }
        {addToPlaylist && <PlaylistDialog handleCloseList={setAddToPlaylist}/> }
      </Box>
    </Card>
  );
};

export default SearchCard;
