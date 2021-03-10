import "./App.css";
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import { getTokenFromUrl } from "./utilities/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import PlayerPage from "./pages/PlayerPage/PlayerPage";
import { useDataLayerValue } from "./utilities/DataLayer";

const spotify = new SpotifyWebApi();

export default function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcPXk4JRrk4fY").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, []);

  return (
    <div className="app">
      {token ? <PlayerPage spotify={spotify} /> : <LoginPage />}
    </div>
  );
}
