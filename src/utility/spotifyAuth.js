import axios from "axios";

const getSpotifyAuthorizationCode = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("code");
};

const exchangeSpotifyToken = async (code) => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://localhost:3000/dashboard",
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = response.data.access_token; // store this as global state
    
    // print out user's data for temp debugging
    const userResponse = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userData = userResponse.data;
    console.log("User Data:", userData);

  } catch (error) {
    console.error("Token Exchange Error", error);
  }
};

export { getSpotifyAuthorizationCode, exchangeSpotifyToken };