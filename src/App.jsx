import "./App.css";
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import { getTokenFromUrl } from "./utilities/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import PlayerPage from "./pages/PlayerPage/PlayerPage";
import { useDataLayerValue } from "./utilities/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

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
    }
  }, []);

  return <div className="app">{token ? <PlayerPage /> : <LoginPage />}</div>;
}

export default App;
