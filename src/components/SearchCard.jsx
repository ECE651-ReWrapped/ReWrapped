import { Card, Button, Box } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import PlaylistDialog from "./PlaylistDialog";

// Call this function to display a toast with the error message
const notify = (message) => toast.error(message);

const SearchCard = ({ user }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [ viewPlaylistDialog, setViewPlaylistDialog ] = useState(false);

  useEffect(() => {
    const checkFollowStatus = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_LOCAL}/isFollowed`, {
          params: { targetID: user.user_id },
          withCredentials: true,
        });
        setIsFollowed(response.data.isFollowed);
      } catch (error) {
        // handle error
        console.error(error);
      }
    };

    checkFollowStatus();
  }, [user.user_id]);

  const followUser = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_LOCAL}/followUser`, { targetID: user.user_id }, { withCredentials: true });
      setIsFollowed(true);  // Update state after successful follow
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        notify(err.response.data.message);
      } else {
        notify("An error occurred.");
        console.log(err);
      }
    }
  };

  const unfollowUser = async () => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_API_LOCAL}/unfollowUser`, {
        data: { targetID: user.user_id },
        withCredentials: true
      });
      setIsFollowed(false);  // Update state after successful unfollow
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        notify(err.response.data.message);
      } else {
        notify("An error occurred.");
        console.log(err);
      }
    }
  };

  // shared playlists handlers
  const handleAddPlaylist = async () => {
    setViewPlaylistDialog(true);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
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
          <Button onClick={isFollowed ? unfollowUser : followUser}>
            {isFollowed ? 'Unfollow' : 'Follow'}
          </Button>
          <Button onClick={handleAddPlaylist}>Add Playlist</Button>
        </Box>
      </Card>
      {viewPlaylistDialog && <PlaylistDialog currUser={user.user_name} handleCloseList={setViewPlaylistDialog} />}
    </>
  );
};

export default SearchCard;
